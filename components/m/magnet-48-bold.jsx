import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpuejfbaw.css';
import '../../css/b/b858i5q6u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpuejfbaw"/><path class="b858i5q6u"/>`,
		"fallback": "energy-icons:magnet-48-bold",
	});
}

export default Component;
