import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfrl_cb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfrl_cb_l"/>`,
		"fallback": "thesvg:trezor",
	});
}

export default Component;
