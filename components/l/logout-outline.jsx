import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xocow_b9m.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xocow_b9m"/>`,
		"fallback": "teenyicons:logout-outline",
	});
}

export default Component;
