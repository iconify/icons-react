import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d18g1tbcl.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d18g1tbcl"/>`,
		"fallback": "fa-solid:plane-arrival",
	});
}

export default Component;
