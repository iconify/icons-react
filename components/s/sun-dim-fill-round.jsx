import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0dgv8bmn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0dgv8bmn"/>`,
		"fallback": "coolicons:sun-dim-fill-round",
	});
}

export default Component;
