import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwdj28vql.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwdj28vql"/>`,
		"fallback": "energy-icons:uv-index-48-bold",
	});
}

export default Component;
