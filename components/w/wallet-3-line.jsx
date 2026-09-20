import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mqx3i42jl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mqx3i42jl"/>`,
		"fallback": "ri:wallet-3-line",
	});
}

export default Component;
