import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es3sj_btn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es3sj_btn"/>`,
		"fallback": "energy-icons:navigation-off-48",
	});
}

export default Component;
