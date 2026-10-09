import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4qu0qbdb.css';
import '../../css/u/uu6r2xbvg.css';
import '../../css/l/l6bm51bjm.css';
import '../../css/q/qpt-xtbcx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4qu0qbdb"/><path class="uu6r2xbvg"/><path class="l6bm51bjm"/><path class="qpt-xtbcx"/>`,
		"fallback": "energy-icons:met-mast-20-bold",
	});
}

export default Component;
