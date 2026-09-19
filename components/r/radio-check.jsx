import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/am499lb_h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="am499lb_h"/>`,
		"fallback": "gg:radio-check",
	});
}

export default Component;
