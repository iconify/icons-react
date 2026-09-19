import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dr9w9cuwd.css';
import '../../css/u/umljw05vc.css';
import '../../css/k/k0zklwbhr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dr9w9cuwd"/><path class="umljw05vc"/><path class="k0zklwbhr"/>`,
		"fallback": "circum:vault",
	});
}

export default Component;
