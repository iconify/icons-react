import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxosvw3ix.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxosvw3ix"/>`,
		"fallback": "keyline-icons:user-minus-sharp",
	});
}

export default Component;
