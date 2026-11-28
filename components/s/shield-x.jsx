import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tup9x39uj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tup9x39uj"/>`,
		"fallback": "noviair:shield-x",
	});
}

export default Component;
