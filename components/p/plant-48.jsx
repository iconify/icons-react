import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cpqtu-bsh.css';
import '../../css/c/cq09toq9d.css';
import '../../css/l/lmmaxg6dh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cpqtu-bsh"/><path class="cq09toq9d"/><path class="lmmaxg6dh"/>`,
		"fallback": "energy-icons:plant-48",
	});
}

export default Component;
