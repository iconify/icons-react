import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s71x42bul.css';
import '../../css/d/dutsueb3v.css';
import '../../css/y/ybedvpc_m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s71x42bul"/><path class="dutsueb3v"/><path class="ybedvpc_m"/>`,
		"fallback": "energy-icons:jack-up-vessel-20-bold",
	});
}

export default Component;
