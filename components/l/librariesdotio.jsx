import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrhp5sbbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrhp5sbbx"/>`,
		"fallback": "thesvg-color:librariesdotio",
	});
}

export default Component;
