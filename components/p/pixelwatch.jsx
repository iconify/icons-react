import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lcy7zcc9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lcy7zcc9m"/>`,
		"fallback": "cbi:pixelwatch",
	});
}

export default Component;
