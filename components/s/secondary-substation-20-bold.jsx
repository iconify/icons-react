import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pnex-cbcf.css';
import '../../css/m/m480pab_j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pnex-cbcf"/><path class="m480pab_j"/>`,
		"fallback": "energy-icons:secondary-substation-20-bold",
	});
}

export default Component;
