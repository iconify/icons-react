import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grfi6tbpu.css';
import '../../css/w/w2h3d0buh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grfi6tbpu"/><path class="w2h3d0buh"/>`,
		"fallback": "selfhst:sunshine-dark",
	});
}

export default Component;
