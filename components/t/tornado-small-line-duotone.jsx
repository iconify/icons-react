import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/k4ialmxqs.css';
import '../../css/i/ihtlpugbo.css';
import '../../css/w/wh_7-zbzo.css';
import '../../css/b/bdw1r4b6v.css';
import '../../css/d/dfx-lljpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="k4ialmxqs"/><path class="ihtlpugbo"/><path class="wh_7-zbzo"/><path class="bdw1r4b6v"/><path class="dfx-lljpe"/></g>`,
		"fallback": "solar:tornado-small-line-duotone",
	});
}

export default Component;
