import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i0ragzbzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="i0ragzbzd"/>`,
		"fallback": "lsicon:unlink-filled",
	});
}

export default Component;
