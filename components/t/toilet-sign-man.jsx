import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/br41wibdi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="br41wibdi"/>`,
		"fallback": "streamline-flex:toilet-sign-man",
	});
}

export default Component;
