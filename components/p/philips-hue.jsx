import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx6x4gb6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx6x4gb6a"/>`,
		"fallback": "thesvg-color:philips-hue",
	});
}

export default Component;
