import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqiq8pbyg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqiq8pbyg"/>`,
		"fallback": "cbi:pixelwatch",
	});
}

export default Component;
