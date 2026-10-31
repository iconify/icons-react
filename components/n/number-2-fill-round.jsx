import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/atm0czbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="atm0czbsf"/>`,
		"fallback": "coolicons:number-2-fill-round",
	});
}

export default Component;
