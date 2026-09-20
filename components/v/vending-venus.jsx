import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xg5u6gbbk.css';
import '../../css/f/f-4f0ug2j.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xg5u6gbbk"/><path class="f-4f0ug2j"/>`,
		"fallback": "temaki:vending-venus",
	});
}

export default Component;
