import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uov-5mbtg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uov-5mbtg"/>`,
		"fallback": "fxemoji:smallorangediamond",
	});
}

export default Component;
