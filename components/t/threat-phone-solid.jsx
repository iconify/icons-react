import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjsr8gbyc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jjsr8gbyc"/>`,
		"fallback": "streamline-flex:threat-phone-solid",
	});
}

export default Component;
