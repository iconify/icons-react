import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvhv_7sne.css';
import '../../css/x/xrl_dh1so.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvhv_7sne"/><path class="xrl_dh1so"/>`,
		"fallback": "solar:power-bold",
	});
}

export default Component;
