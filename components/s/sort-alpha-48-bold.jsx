import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixu--sbaj.css';
import '../../css/z/z4gxs_ibg.css';
import '../../css/x/xoi-lebbd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixu--sbaj"/><path class="z4gxs_ibg"/><path class="xoi-lebbd"/>`,
		"fallback": "energy-icons:sort-alpha-48-bold",
	});
}

export default Component;
