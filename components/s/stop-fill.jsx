import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_ny3m6cp.css';
import '../../css/z/z_8t63-wg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="f_ny3m6cp"/><rect class="z_8t63-wg"/>`,
		"fallback": "lets-icons:stop-fill",
	});
}

export default Component;
