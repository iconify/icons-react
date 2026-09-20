import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dh6p_1bdk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dh6p_1bdk"/>`,
		"fallback": "temaki:tree-broadleaved",
	});
}

export default Component;
