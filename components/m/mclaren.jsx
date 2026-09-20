import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/ht0_sf_dq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ht0_sf_dq"/>`,
		"fallback": "thesvg:mclaren",
	});
}

export default Component;
