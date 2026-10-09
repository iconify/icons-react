import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsb2-hb_n.css';
import '../../css/r/r56804bvh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsb2-hb_n"/><path class="r56804bvh"/>`,
		"fallback": "energy-icons:ladder-20-bold",
	});
}

export default Component;
