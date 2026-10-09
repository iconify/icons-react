import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhq4ynm1t.css';
import '../../css/z/zenhfcbmd.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vhq4ynm1t"/><path class="zenhfcbmd"/>`,
		"fallback": "energy-icons:messages-20-bold",
	});
}

export default Component;
