import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dshqe4b0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dshqe4b0p"/>`,
		"fallback": "mingcute:parking-lights-fill",
	});
}

export default Component;
