import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/i/in4f_nj7p.css';
import '../../css/d/dyc7ambzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="in4f_nj7p"/><path class="dyc7ambzy"/></g>`,
		"fallback": "keyline-icons:list-minus-sharp-two-tone",
	});
}

export default Component;
