import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixi9bvbgc.css';
import '../../css/e/eqftyninf.css';
import '../../css/g/gc8-e8__z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ixi9bvbgc"/><path class="eqftyninf"/><path class="gc8-e8__z"/>`,
		"fallback": "energy-icons:stethoscope-48-bold",
	});
}

export default Component;
