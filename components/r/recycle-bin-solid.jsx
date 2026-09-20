import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nmbbn3sob.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nmbbn3sob"/>`,
		"fallback": "streamline-flex:recycle-bin-solid",
	});
}

export default Component;
