import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mi9k0obgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mi9k0obgc"/>`,
		"fallback": "cbi:smart-power-strip",
	});
}

export default Component;
