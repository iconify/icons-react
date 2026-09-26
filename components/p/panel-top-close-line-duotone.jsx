import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f-rbj8yzp.css';
import '../../css/e/e-jka_0cn.css';
import '../../css/q/q2oyql66o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f-rbj8yzp"/><path class="e-jka_0cn"/><path class="q2oyql66o"/></g>`,
		"fallback": "solar:panel-top-close-line-duotone",
	});
}

export default Component;
