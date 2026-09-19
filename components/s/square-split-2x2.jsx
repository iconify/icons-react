import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq6mer8bc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq6mer8bc"/>`,
		"fallback": "f7:square-split-2x2",
	});
}

export default Component;
