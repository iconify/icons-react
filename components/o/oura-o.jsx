import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ech9kbb3b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ech9kbb3b"/>`,
		"fallback": "cbi:oura-o",
	});
}

export default Component;
