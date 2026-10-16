import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tluui_b4e.css';
import '../../css/t/tl_h0kbso.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tluui_b4e"/><path class="tl_h0kbso"/>`,
		"fallback": "energy-icons:landfill-gas-20-bold",
	});
}

export default Component;
