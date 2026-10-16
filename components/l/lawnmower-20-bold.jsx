import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zudjy0tbx.css';
import '../../css/t/te4hhac8s.css';
import '../../css/b/bat89cbei.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zudjy0tbx"/><path class="te4hhac8s"/><path class="bat89cbei"/>`,
		"fallback": "energy-icons:lawnmower-20-bold",
	});
}

export default Component;
