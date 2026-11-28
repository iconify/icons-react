import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/elin9y5mw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="elin9y5mw"/>`,
		"fallback": "iconaut:shield-key-solid",
	});
}

export default Component;
