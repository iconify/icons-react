import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nt7sn_o_r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nt7sn_o_r"/>`,
		"fallback": "thesvg:signal",
	});
}

export default Component;
