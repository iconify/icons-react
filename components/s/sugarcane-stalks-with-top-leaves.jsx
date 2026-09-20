import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wc2rqimtn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wc2rqimtn"/>`,
		"fallback": "pinhead:sugarcane-stalks-with-top-leaves",
	});
}

export default Component;
