import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lj_2k2vxo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lj_2k2vxo"/>`,
		"fallback": "noviair-light:office-building-check",
	});
}

export default Component;
