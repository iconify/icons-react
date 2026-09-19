import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/so2clvbue.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="so2clvbue"/>`,
		"fallback": "glyphs:scissors-open-1-bold",
	});
}

export default Component;
