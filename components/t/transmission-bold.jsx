import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o4ba7dbhr.css';
import '../../css/m/mo2l0vb2y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o4ba7dbhr"/><path class="mo2l0vb2y"/>`,
		"fallback": "solar:transmission-bold",
	});
}

export default Component;
