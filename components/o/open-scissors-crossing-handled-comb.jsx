import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ttle3lbib.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ttle3lbib"/>`,
		"fallback": "pinhead:open-scissors-crossing-handled-comb",
	});
}

export default Component;
