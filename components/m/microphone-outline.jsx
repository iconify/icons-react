import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt2675bvl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt2675bvl"/>`,
		"fallback": "teenyicons:microphone-outline",
	});
}

export default Component;
