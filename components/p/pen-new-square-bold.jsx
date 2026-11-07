import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/enn3tn4xs.css';
import '../../css/w/w-oye57eg.css';
import '../../css/k/k3301qb-e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="enn3tn4xs"/><path class="w-oye57eg"/><path class="k3301qb-e"/>`,
		"fallback": "solar:pen-new-square-bold",
	});
}

export default Component;
