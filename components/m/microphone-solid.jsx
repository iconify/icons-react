import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t9_uklbjc.css';
import '../../css/p/pv-24ob8n.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t9_uklbjc"/><path class="pv-24ob8n"/>`,
		"fallback": "teenyicons:microphone-solid",
	});
}

export default Component;
