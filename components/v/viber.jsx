import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3u07guut.css';

const viewBox = {"width":23,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3u07guut"/>`,
		"fallback": "fontisto:viber",
	});
}

export default Component;
