import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtl8kcc2s.css';
import '../../css/a/a03juec7r.css';
import '../../css/c/cnx91p7lj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtl8kcc2s"/><path class="a03juec7r"/><path class="cnx91p7lj"/>`,
		"fallback": "energy-icons:park-and-ride-48",
	});
}

export default Component;
