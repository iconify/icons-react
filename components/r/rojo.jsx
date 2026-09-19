import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cccyio-9l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cccyio-9l"/>`,
		"fallback": "catppuccin:rojo",
	});
}

export default Component;
