import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ay164zbva.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ay164zbva"/>`,
		"fallback": "rivet-icons:laptop-solid",
	});
}

export default Component;
