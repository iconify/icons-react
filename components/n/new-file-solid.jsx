import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0b5x4exe.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f0b5x4exe"/>`,
		"fallback": "streamline:new-file-solid",
	});
}

export default Component;
