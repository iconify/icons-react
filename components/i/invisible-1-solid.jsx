import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tje0zzbrt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tje0zzbrt"/>`,
		"fallback": "streamline:invisible-1-solid",
	});
}

export default Component;
