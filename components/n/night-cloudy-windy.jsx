import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sx7e35btp.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sx7e35btp"/>`,
		"fallback": "wi:night-cloudy-windy",
	});
}

export default Component;
