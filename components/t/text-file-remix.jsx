import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwd09ej6l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kwd09ej6l"/>`,
		"fallback": "streamline-flex:text-file-remix",
	});
}

export default Component;
