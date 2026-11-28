import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kn1wbx3yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kn1wbx3yn"/>`,
		"fallback": "noviair-light:star-half",
	});
}

export default Component;
