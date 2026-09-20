import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a_k8bq4mi.css';
import '../../css/d/dmgzojbvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a_k8bq4mi"/><path class="dmgzojbvz"/></g>`,
		"fallback": "solar:pill-linear",
	});
}

export default Component;
