import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e31b-bcfo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="e31b-bcfo"/>`,
		"fallback": "streamline-flex:play-list-6-solid",
	});
}

export default Component;
