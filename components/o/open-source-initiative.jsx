import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xk4mz_b8x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xk4mz_b8x"/>`,
		"fallback": "thesvg-color:open-source-initiative",
	});
}

export default Component;
