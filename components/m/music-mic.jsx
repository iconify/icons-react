import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu3blvvbd.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uu3blvvbd"/>`,
		"fallback": "f7:music-mic",
	});
}

export default Component;
