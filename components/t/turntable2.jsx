import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl25cabmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fl25cabmx"/>`,
		"fallback": "reicon:turntable2",
	});
}

export default Component;
