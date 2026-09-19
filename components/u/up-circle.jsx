import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kee_ltbgu.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kee_ltbgu"/>`,
		"fallback": "websymbol:up-circle",
	});
}

export default Component;
