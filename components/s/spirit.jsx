import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coopzbbjy.css';
import '../../css/n/nr--xqbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coopzbbjy"/><path clip-rule="evenodd" class="nr--xqbvo"/>`,
		"fallback": "token:spirit",
	});
}

export default Component;
