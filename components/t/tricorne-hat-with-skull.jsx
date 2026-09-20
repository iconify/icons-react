import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nes77ph0g.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nes77ph0g"/>`,
		"fallback": "pinhead:tricorne-hat-with-skull",
	});
}

export default Component;
