import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkyaeo7fi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jkyaeo7fi"/>`,
		"fallback": "streamline-flex:one-finger-tap-solid",
	});
}

export default Component;
