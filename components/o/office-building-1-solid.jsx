import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-cyvmb8b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="w-cyvmb8b"/>`,
		"fallback": "streamline-flex:office-building-1-solid",
	});
}

export default Component;
