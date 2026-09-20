import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myu3wk05z.css';

const viewBox = {"width":24,"height":24,"left":-2.5,"top":-2.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="myu3wk05z"/>`,
		"fallback": "jam:search",
	});
}

export default Component;
