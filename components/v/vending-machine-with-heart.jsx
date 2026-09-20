import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjtu37bkc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjtu37bkc"/>`,
		"fallback": "pinhead:vending-machine-with-heart",
	});
}

export default Component;
