import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ul6au0wgw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ul6au0wgw"/>`,
		"fallback": "tabler:math-function",
	});
}

export default Component;
