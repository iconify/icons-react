import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/imvef3bha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="imvef3bha"/>`,
		"fallback": "meteor-icons:list",
	});
}

export default Component;
