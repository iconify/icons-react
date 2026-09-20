import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpp3vpbds.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpp3vpbds"/>`,
		"fallback": "rivet-icons:user-group",
	});
}

export default Component;
