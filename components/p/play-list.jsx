import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4myf3box.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4myf3box"/>`,
		"fallback": "fontisto:play-list",
	});
}

export default Component;
