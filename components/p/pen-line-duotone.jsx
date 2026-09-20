import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jef8rhbsn.css';
import '../../css/b/bu7no646v.css';
import '../../css/f/fpvahdpsw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jef8rhbsn"/><path class="bu7no646v"/><path class="fpvahdpsw"/></g>`,
		"fallback": "keyline-icons:pen-line-duotone",
	});
}

export default Component;
