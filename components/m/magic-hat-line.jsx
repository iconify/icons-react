import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f9k1dtb8p.css';
import '../../css/s/sn4crhb1z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f9k1dtb8p"/><path clip-rule="evenodd" class="sn4crhb1z"/>`,
		"fallback": "mingcute:magic-hat-line",
	});
}

export default Component;
