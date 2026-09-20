import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kof_8-b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="kof_8-b8i"/>`,
		"fallback": "wordpress:more",
	});
}

export default Component;
