import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ubpwl-aai.css';
import '../../css/t/tfo27y8rt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ubpwl-aai"/><path class="tfo27y8rt"/>`,
		"fallback": "boxicons:sd-card",
	});
}

export default Component;
