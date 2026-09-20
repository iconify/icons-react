import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu4r2kb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uu4r2kb_a"/>`,
		"fallback": "mingcute:pin-2-fill",
	});
}

export default Component;
