import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7-_jbbvg.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7-_jbbvg"/>`,
		"fallback": "wi:night-storm-showers",
	});
}

export default Component;
