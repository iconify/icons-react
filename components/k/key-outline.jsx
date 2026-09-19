import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wb59htb_d.css';
import '../../css/k/k4or6zb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wb59htb_d"/><path clip-rule="evenodd" class="k4or6zb4x"/>`,
		"fallback": "basil:key-outline",
	});
}

export default Component;
