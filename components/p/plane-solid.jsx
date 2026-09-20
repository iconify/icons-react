import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlopy0b6z.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlopy0b6z"/>`,
		"fallback": "rivet-icons:plane-solid",
	});
}

export default Component;
