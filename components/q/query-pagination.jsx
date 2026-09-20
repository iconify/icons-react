import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6w3d1k8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="d6w3d1k8q"/>`,
		"fallback": "wordpress:query-pagination",
	});
}

export default Component;
