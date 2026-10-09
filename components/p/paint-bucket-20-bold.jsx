import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ioqh6lbvj.css';
import '../../css/n/nhtywxbko.css';
import '../../css/q/qz4s_4byz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ioqh6lbvj"/><path class="nhtywxbko"/><path class="qz4s_4byz"/>`,
		"fallback": "energy-icons:paint-bucket-20-bold",
	});
}

export default Component;
