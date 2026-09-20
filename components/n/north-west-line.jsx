import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mwl9r7h4c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mwl9r7h4c"/>`,
		"fallback": "si:north-west-line",
	});
}

export default Component;
