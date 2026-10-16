import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai5j-lbxc.css';
import '../../css/m/mo6avcbkz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai5j-lbxc"/><path class="mo6avcbkz"/>`,
		"fallback": "energy-icons:voltage-low-20-bold",
	});
}

export default Component;
