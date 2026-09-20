import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayi46kkzs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayi46kkzs"/>`,
		"fallback": "simple-icons:nucleo",
	});
}

export default Component;
