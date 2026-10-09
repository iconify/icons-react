import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz2l3p02o.css';
import '../../css/t/tb-omd_8w.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz2l3p02o"/><path class="tb-omd_8w"/>`,
		"fallback": "energy-icons:rolling-pin-20-bold",
	});
}

export default Component;
