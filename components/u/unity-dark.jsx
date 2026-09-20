import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6hgihjwq.css';

const viewBox = {"width":256,"height":263};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6hgihjwq"/>`,
		"fallback": "thesvg-color:unity-dark",
	});
}

export default Component;
