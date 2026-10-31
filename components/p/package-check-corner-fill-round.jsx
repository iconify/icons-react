import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bl_m7_hhq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bl_m7_hhq"/>`,
		"fallback": "coolicons:package-check-corner-fill-round",
	});
}

export default Component;
