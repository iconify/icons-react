import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awl_g5bxw.css';
import '../../css/f/fj2f88bnb.css';
import '../../css/s/sqihr-4zl.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awl_g5bxw"/><path class="fj2f88bnb"/><path class="sqihr-4zl"/>`,
		"fallback": "energy-icons:list-tree-48-bold",
	});
}

export default Component;
