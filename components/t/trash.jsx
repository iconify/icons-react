import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eo9w_hblg.css';

const viewBox = {"width":572,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eo9w_hblg"/>`,
		"fallback": "ls:trash",
	});
}

export default Component;
