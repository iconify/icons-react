import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q66_a9bao.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q66_a9bao"/>`,
		"fallback": "streamline:location-target-1-solid",
	});
}

export default Component;
