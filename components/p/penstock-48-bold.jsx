import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-uyp2b0j.css';
import '../../css/q/qgl4r9bnu.css';
import '../../css/y/yf83rla5y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-uyp2b0j"/><path class="qgl4r9bnu"/><path class="yf83rla5y"/>`,
		"fallback": "energy-icons:penstock-48-bold",
	});
}

export default Component;
