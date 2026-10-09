import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c7-lm4bvk.css';
import '../../css/z/zjq3s2ihz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c7-lm4bvk"/><path class="zjq3s2ihz"/>`,
		"fallback": "energy-icons:laundry-basket-20",
	});
}

export default Component;
