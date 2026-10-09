import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpnvortse.css';
import '../../css/z/zpkef6b1t.css';
import '../../css/r/roy5ebcho.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpnvortse"/><path class="zpkef6b1t"/><path class="roy5ebcho"/>`,
		"fallback": "energy-icons:warehouse-48-bold",
	});
}

export default Component;
