import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjqkv_kki.css';
import '../../css/t/ttc468btu.css';
import '../../css/u/uii4avzkv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjqkv_kki"/><circle class="ttc468btu"/><circle class="uii4avzkv"/>`,
		"fallback": "eva:shopping-cart-fill",
	});
}

export default Component;
