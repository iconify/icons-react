import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0yh6z_ij.css';
import '../../css/l/le8h1nbcf.css';
import '../../css/b/boyowm1xr.css';
import '../../css/y/yxszw6bfg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0yh6z_ij"/><path class="le8h1nbcf"/><path class="boyowm1xr"/><path class="yxszw6bfg"/>`,
		"fallback": "solar:users-group-rounded-bold",
	});
}

export default Component;
