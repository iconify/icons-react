import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e9f_3wnku.css';
import '../../css/n/n-pf8dtms.css';
import '../../css/t/tn_egrb9l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e9f_3wnku"/><path class="n-pf8dtms"/><path class="tn_egrb9l"/>`,
		"fallback": "energy-icons:text-size-20",
	});
}

export default Component;
