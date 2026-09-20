import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ihtfwr4-j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ihtfwr4-j"/>`,
		"fallback": "streamline-flex:magnifying-glass-solid",
	});
}

export default Component;
