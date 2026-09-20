import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb9_o8s9v.css';
import '../../css/d/dkpju-4cw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cb9_o8s9v"/><path class="dkpju-4cw"/>`,
		"fallback": "mingcute:sweats-fill",
	});
}

export default Component;
