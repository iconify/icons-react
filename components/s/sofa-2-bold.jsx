import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p6vyhu-he.css';
import '../../css/g/g_7c-1vki.css';
import '../../css/g/g97e8sbao.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p6vyhu-he"/><path class="g_7c-1vki"/><path class="g97e8sbao"/>`,
		"fallback": "solar:sofa-2-bold",
	});
}

export default Component;
