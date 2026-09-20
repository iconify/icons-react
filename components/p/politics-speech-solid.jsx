import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yuagv9w1g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yuagv9w1g"/>`,
		"fallback": "streamline:politics-speech-solid",
	});
}

export default Component;
