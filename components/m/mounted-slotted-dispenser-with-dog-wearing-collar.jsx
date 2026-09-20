import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl_5fob-g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wl_5fob-g"/>`,
		"fallback": "pinhead:mounted-slotted-dispenser-with-dog-wearing-collar",
	});
}

export default Component;
