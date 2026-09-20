import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxkc8ib1d.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxkc8ib1d"/>`,
		"fallback": "wi:night-alt-cloudy",
	});
}

export default Component;
