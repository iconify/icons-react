import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nqw20ubea.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nqw20ubea"/>`,
		"fallback": "noviair-light:reply",
	});
}

export default Component;
