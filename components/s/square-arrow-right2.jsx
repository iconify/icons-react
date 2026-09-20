import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nsg1nqbgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nsg1nqbgb"/>`,
		"fallback": "reicon:square-arrow-right2",
	});
}

export default Component;
