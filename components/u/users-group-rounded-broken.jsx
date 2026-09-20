import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/xkqyiwblc.css';
import '../../css/s/sd8wznb3i.css';
import '../../css/w/wolrz0b-c.css';
import '../../css/h/hadyfyrdk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="xkqyiwblc"/><path class="sd8wznb3i"/><path class="wolrz0b-c"/><path class="hadyfyrdk"/></g>`,
		"fallback": "solar:users-group-rounded-broken",
	});
}

export default Component;
