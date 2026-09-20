import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d8ix5nblg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d8ix5nblg"/>`,
		"fallback": "ix:telegram-logo",
	});
}

export default Component;
