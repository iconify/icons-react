import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km03pubxo.css';
import '../../css/s/sodknibgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km03pubxo"/><path class="sodknibgc"/>`,
		"fallback": "eos-icons:product-subscriptions-outlined",
	});
}

export default Component;
