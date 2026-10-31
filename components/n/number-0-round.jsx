import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccijvbbez.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccijvbbez"/>`,
		"fallback": "coolicons:number-0-round",
	});
}

export default Component;
