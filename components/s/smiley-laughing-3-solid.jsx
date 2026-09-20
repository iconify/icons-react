import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-w7k98js.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f-w7k98js"/>`,
		"fallback": "streamline:smiley-laughing-3-solid",
	});
}

export default Component;
