import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bfrct_bct.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bfrct_bct"/>`,
		"fallback": "maki:rail-light",
	});
}

export default Component;
