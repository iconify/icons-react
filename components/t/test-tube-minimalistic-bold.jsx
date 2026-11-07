import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uwn-x6e3b.css';
import '../../css/k/k9cm14b8n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uwn-x6e3b"/><path class="k9cm14b8n"/>`,
		"fallback": "solar:test-tube-minimalistic-bold",
	});
}

export default Component;
