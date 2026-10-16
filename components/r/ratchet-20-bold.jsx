import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c93ue0bjc.css';
import '../../css/c/c47fazbzx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c93ue0bjc"/><path class="c47fazbzx"/>`,
		"fallback": "energy-icons:ratchet-20-bold",
	});
}

export default Component;
