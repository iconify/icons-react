import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvm7s_btq.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvm7s_btq"/>`,
		"fallback": "f7:sun-dust",
	});
}

export default Component;
