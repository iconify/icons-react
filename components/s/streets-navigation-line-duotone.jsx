import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/q/qgtd8187v.css';
import '../../css/u/u7mrcgb5f.css';
import '../../css/f/fbtujzbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="qgtd8187v"/><path class="u7mrcgb5f"/><path class="fbtujzbta"/></g>`,
		"fallback": "solar:streets-navigation-line-duotone",
	});
}

export default Component;
