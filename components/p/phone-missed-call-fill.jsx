import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d_hs9s_lv.css';
import '../../css/n/nikou0bxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d_hs9s_lv"/><path class="nikou0bxo"/>`,
		"fallback": "mage:phone-missed-call-fill",
	});
}

export default Component;
