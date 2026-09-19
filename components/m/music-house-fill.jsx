import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg7u04blw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg7u04blw"/>`,
		"fallback": "f7:music-house-fill",
	});
}

export default Component;
