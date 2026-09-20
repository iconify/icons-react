import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/chiatob1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="chiatob1m"/>`,
		"fallback": "thesvg-color:pix",
	});
}

export default Component;
