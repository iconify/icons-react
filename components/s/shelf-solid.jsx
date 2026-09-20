import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kmb8glb3z.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kmb8glb3z"/>`,
		"fallback": "streamline:shelf-solid",
	});
}

export default Component;
