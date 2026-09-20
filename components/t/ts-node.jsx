import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kcgv1r9pk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kcgv1r9pk"/>`,
		"fallback": "thesvg-color:ts-node",
	});
}

export default Component;
