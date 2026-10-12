import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/re49p_baz.css';
import '../../css/s/sxankrbtm.css';
import '../../css/c/c5dzpjbvw.css';
import '../../css/x/xof4vxv5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="re49p_baz"/><path class="sxankrbtm"/><path class="c5dzpjbvw"/><path class="xof4vxv5q"/>`,
		"fallback": "energy-icons:taxi-48-bold",
	});
}

export default Component;
