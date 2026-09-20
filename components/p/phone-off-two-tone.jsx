import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xldle2bgc.css';
import '../../css/e/e9mpndb4a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xldle2bgc"/><path class="e9mpndb4a"/></g>`,
		"fallback": "keyline-icons:phone-off-two-tone",
	});
}

export default Component;
