import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvh1t7b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bvh1t7b8i"/>`,
		"fallback": "tabler:vector-triangle-off",
	});
}

export default Component;
