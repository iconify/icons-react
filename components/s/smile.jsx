import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/klju58vbm.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="klju58vbm"/>`,
		"fallback": "uiw:smile",
	});
}

export default Component;
