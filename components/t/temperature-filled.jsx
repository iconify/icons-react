import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddr35hjpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ddr35hjpu"/>`,
		"fallback": "griddy-icons:temperature-filled",
	});
}

export default Component;
