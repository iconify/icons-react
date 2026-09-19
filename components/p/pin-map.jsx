import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v9prg-o0h.css';

const viewBox = {"width":352,"height":528};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v9prg-o0h"/>`,
		"fallback": "ps:pin-map",
	});
}

export default Component;
