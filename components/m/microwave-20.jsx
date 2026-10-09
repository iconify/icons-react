import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_j5rbcgv.css';
import '../../css/x/xw_k98btt.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_j5rbcgv"/><path class="xw_k98btt"/>`,
		"fallback": "energy-icons:microwave-20",
	});
}

export default Component;
