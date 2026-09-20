import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mplvu4bxj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mplvu4bxj"/>`,
		"fallback": "mdi-light:stop",
	});
}

export default Component;
