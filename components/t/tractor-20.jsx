import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es2omsi-m.css';
import '../../css/x/x_aucnmpg.css';
import '../../css/q/qga5sxbrw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es2omsi-m"/><path class="x_aucnmpg"/><path class="qga5sxbrw"/>`,
		"fallback": "energy-icons:tractor-20",
	});
}

export default Component;
