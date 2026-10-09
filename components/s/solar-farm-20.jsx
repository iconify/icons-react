import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nc_igi0bl.css';
import '../../css/w/wk2rzac0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nc_igi0bl"/><path class="wk2rzac0c"/>`,
		"fallback": "energy-icons:solar-farm-20",
	});
}

export default Component;
