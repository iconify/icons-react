import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un5mhlcug.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un5mhlcug"/>`,
		"fallback": "thesvg:processing",
	});
}

export default Component;
