import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugd2fac-m.css';
import '../../css/x/x5g82_bnd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugd2fac-m"/><path class="x5g82_bnd"/>`,
		"fallback": "energy-icons:owl-48-bold",
	});
}

export default Component;
