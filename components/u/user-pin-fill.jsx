import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rhln61bon.css';
import '../../css/m/mvx_vib_d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rhln61bon"/><path clip-rule="evenodd" class="mvx_vib_d"/>`,
		"fallback": "mingcute:user-pin-fill",
	});
}

export default Component;
