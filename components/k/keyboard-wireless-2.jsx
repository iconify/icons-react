import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xb_adqbem.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xb_adqbem"/>`,
		"fallback": "streamline:keyboard-wireless-2",
	});
}

export default Component;
