import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grfi6tbpu.css';
import '../../css/r/rwxu_6bii.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grfi6tbpu"/><path class="rwxu_6bii"/>`,
		"fallback": "selfhst:sunshine-dark",
	});
}

export default Component;
