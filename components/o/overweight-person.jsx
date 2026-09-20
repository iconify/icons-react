import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wt4w5s_mf.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wt4w5s_mf"/>`,
		"fallback": "pinhead:overweight-person",
	});
}

export default Component;
