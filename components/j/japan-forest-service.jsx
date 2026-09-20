import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir6jv9c4n.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir6jv9c4n"/>`,
		"fallback": "roentgen:japan-forest-service",
	});
}

export default Component;
