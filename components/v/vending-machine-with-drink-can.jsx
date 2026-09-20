import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gqt3l_bdr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gqt3l_bdr"/>`,
		"fallback": "pinhead:vending-machine-with-drink-can",
	});
}

export default Component;
