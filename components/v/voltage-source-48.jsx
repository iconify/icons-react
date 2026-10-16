import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lw3x_bcqz.css';
import '../../css/y/ywzq7itsb.css';
import '../../css/w/wz0-7abar.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lw3x_bcqz"/><path class="ywzq7itsb"/><path class="wz0-7abar"/>`,
		"fallback": "energy-icons:voltage-source-48",
	});
}

export default Component;
