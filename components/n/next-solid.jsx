import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s34m4uamv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s34m4uamv"/>`,
		"fallback": "streamline:next-solid",
	});
}

export default Component;
