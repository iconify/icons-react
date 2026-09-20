import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlim53bfo.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlim53bfo"/>`,
		"fallback": "streamline-flex:soft-drink-can-remix",
	});
}

export default Component;
