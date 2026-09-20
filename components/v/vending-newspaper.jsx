import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/attlt2bak.css';
import '../../css/w/w5pegf6wk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="attlt2bak"/><path class="w5pegf6wk"/>`,
		"fallback": "temaki:vending-newspaper",
	});
}

export default Component;
