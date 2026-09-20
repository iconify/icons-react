import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hp5mkzh9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hp5mkzh9x"/>`,
		"fallback": "si:north-east-escape-fill",
	});
}

export default Component;
