import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukrge3umx.css';
import '../../css/y/ybpm01_ag.css';
import '../../css/z/zo-06kn-a.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukrge3umx"/><path class="ybpm01_ag"/><path class="zo-06kn-a"/>`,
		"fallback": "energy-icons:shield-lock-20",
	});
}

export default Component;
