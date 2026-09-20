import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bse_o5byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bse_o5byy"/>`,
		"fallback": "solar:key-minimalistic-broken",
	});
}

export default Component;
