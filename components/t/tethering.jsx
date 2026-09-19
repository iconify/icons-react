import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djtt_e1bf.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djtt_e1bf"/>`,
		"fallback": "whh:tethering",
	});
}

export default Component;
