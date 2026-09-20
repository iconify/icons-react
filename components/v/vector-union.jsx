import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ch6n-rbwr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ch6n-rbwr"/>`,
		"fallback": "mdi-light:vector-union",
	});
}

export default Component;
