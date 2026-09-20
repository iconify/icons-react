import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk2noib-m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wk2noib-m"/>`,
		"fallback": "pinhead:shaker-pint-glass",
	});
}

export default Component;
