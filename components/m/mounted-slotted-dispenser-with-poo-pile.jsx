import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s86e7cc1y.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s86e7cc1y"/>`,
		"fallback": "pinhead:mounted-slotted-dispenser-with-poo-pile",
	});
}

export default Component;
