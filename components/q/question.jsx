import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nlfg3onlw.css';
import '../../css/x/xa153ngzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nlfg3onlw"/><circle class="xa153ngzc"/>`,
		"fallback": "prime:question",
	});
}

export default Component;
