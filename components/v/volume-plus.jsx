import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kugr_vbyc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kugr_vbyc"/>`,
		"fallback": "noviair:volume-plus",
	});
}

export default Component;
