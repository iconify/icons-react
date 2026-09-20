import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cil0dr3xh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cil0dr3xh"/>`,
		"fallback": "tabler:map-pin-filled",
	});
}

export default Component;
