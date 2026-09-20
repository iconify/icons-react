import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g4of0kbbq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g4of0kbbq"/>`,
		"fallback": "reicon:music-note4-filled",
	});
}

export default Component;
