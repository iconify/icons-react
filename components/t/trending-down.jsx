import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u3qet9wal.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="u3qet9wal"/>`,
		"fallback": "wordpress:trending-down",
	});
}

export default Component;
