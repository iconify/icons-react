import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cjvql0rbm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cjvql0rbm"/>`,
		"fallback": "thesvg-color:mediamarkt",
	});
}

export default Component;
