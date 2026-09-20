import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir7d-pmef.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir7d-pmef"/>`,
		"fallback": "rivet-icons:user-solid",
	});
}

export default Component;
