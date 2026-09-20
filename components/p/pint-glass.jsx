import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iave49bxn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iave49bxn"/>`,
		"fallback": "pinhead:pint-glass",
	});
}

export default Component;
