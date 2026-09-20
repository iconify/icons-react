import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zkwmo2b0h.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zkwmo2b0h"/>`,
		"fallback": "octicon:telescope-16",
	});
}

export default Component;
