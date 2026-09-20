import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hji4_vdzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hji4_vdzp"/>`,
		"fallback": "mingcute:toggle-left-fill",
	});
}

export default Component;
