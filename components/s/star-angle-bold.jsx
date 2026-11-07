import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qhcdb8c_v.css';
import '../../css/e/efbcexbkv.css';
import '../../css/v/v299wtbzw.css';
import '../../css/s/s8fcxyg2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qhcdb8c_v"/><path class="efbcexbkv"/><path class="v299wtbzw"/><path class="s8fcxyg2d"/>`,
		"fallback": "solar:star-angle-bold",
	});
}

export default Component;
