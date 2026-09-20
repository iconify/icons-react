import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bva1ywnrc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bva1ywnrc"/>`,
		"fallback": "rivet-icons:trash-solid",
	});
}

export default Component;
