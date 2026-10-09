import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yw9dp8bid.css';
import '../../css/k/k8w-7fbni.css';
import '../../css/o/o-hjr9b_g.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yw9dp8bid"/><path class="k8w-7fbni"/><path class="o-hjr9b_g"/>`,
		"fallback": "energy-icons:pipeline-20-bold",
	});
}

export default Component;
