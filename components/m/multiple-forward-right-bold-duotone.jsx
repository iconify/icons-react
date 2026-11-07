import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ytjd3_bxd.css';
import '../../css/r/rj2mhcbor.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ytjd3_bxd"/><path clip-rule="evenodd" class="rj2mhcbor"/>`,
		"fallback": "solar:multiple-forward-right-bold-duotone",
	});
}

export default Component;
