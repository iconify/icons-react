import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dai24z1ii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dai24z1ii"/>`,
		"fallback": "coolicons:number-0-fill-round",
	});
}

export default Component;
