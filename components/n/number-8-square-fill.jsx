import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mnox6ln0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mnox6ln0z"/>`,
		"fallback": "iconamoon:number-8-square-fill",
	});
}

export default Component;
