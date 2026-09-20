import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zvrx42i3v.css';
import '../../css/z/zfvp08v5a.css';
import '../../css/h/h54ylcbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zvrx42i3v"/><path class="zfvp08v5a"/><path class="h54ylcbtg"/></g>`,
		"fallback": "solar:lightbulb-line-duotone",
	});
}

export default Component;
