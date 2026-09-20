import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yvlwphb6t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yvlwphb6t"/>`,
		"fallback": "ri:number-8",
	});
}

export default Component;
