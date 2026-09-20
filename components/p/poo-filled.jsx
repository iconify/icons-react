import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zflz6tblo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zflz6tblo"/>`,
		"fallback": "tabler:poo-filled",
	});
}

export default Component;
