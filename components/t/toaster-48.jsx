import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7sb8tbhe.css';
import '../../css/v/vj9dlzbor.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7sb8tbhe"/><path class="vj9dlzbor"/>`,
		"fallback": "energy-icons:toaster-48",
	});
}

export default Component;
