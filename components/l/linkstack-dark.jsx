import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ljt8zg9xj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ljt8zg9xj"/>`,
		"fallback": "selfhst:linkstack-dark",
	});
}

export default Component;
