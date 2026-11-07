import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7mkfke0q.css';
import '../../css/o/oc7jq_r_y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7mkfke0q"/><path class="oc7jq_r_y"/>`,
		"fallback": "solar:like-bold",
	});
}

export default Component;
