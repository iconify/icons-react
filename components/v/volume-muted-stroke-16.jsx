import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eyhe3ob7c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eyhe3ob7c"/>`,
		"fallback": "garden:volume-muted-stroke-16",
	});
}

export default Component;
