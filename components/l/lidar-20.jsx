import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqxdqfbra.css';
import '../../css/w/wwy3pgbwd.css';
import '../../css/e/e3z_k3b8k.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sqxdqfbra"/><path class="wwy3pgbwd"/><path class="e3z_k3b8k"/>`,
		"fallback": "energy-icons:lidar-20",
	});
}

export default Component;
