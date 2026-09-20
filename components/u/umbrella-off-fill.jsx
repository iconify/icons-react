import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/w/wpg3ojbbi.css';
import '../../css/c/c-5dmpe2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="wpg3ojbbi"/><path class="c-5dmpe2t"/></g>`,
		"fallback": "keyline-icons:umbrella-off-fill",
	});
}

export default Component;
