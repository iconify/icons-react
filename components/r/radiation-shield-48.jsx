import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlsrljbwz.css';
import '../../css/c/cbs5z2bem.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlsrljbwz"/><path class="cbs5z2bem"/>`,
		"fallback": "energy-icons:radiation-shield-48",
	});
}

export default Component;
