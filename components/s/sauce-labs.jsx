import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhml-jbbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhml-jbbm"/>`,
		"fallback": "thesvg-color:sauce-labs",
	});
}

export default Component;
