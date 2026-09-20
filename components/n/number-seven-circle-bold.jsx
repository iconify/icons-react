import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rg59nlbhx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rg59nlbhx"/>`,
		"fallback": "streamline-ultimate:number-seven-circle-bold",
	});
}

export default Component;
