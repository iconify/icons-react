import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khoq0k05p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khoq0k05p"/>`,
		"fallback": "cbi:playstation-3",
	});
}

export default Component;
