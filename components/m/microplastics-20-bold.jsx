import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_hvfxj7d.css';
import '../../css/q/q7snb2uzc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_hvfxj7d"/><path class="q7snb2uzc"/>`,
		"fallback": "energy-icons:microplastics-20-bold",
	});
}

export default Component;
