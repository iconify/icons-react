import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpl6erble.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpl6erble"/>`,
		"fallback": "ri:pass-valid-line",
	});
}

export default Component;
