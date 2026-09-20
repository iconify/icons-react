import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qeq6vdblg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qeq6vdblg"/>`,
		"fallback": "majesticons:planet",
	});
}

export default Component;
