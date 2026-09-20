import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i7-vrkbsh.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i7-vrkbsh"/>`,
		"fallback": "pinhead:jp-lighthouse",
	});
}

export default Component;
