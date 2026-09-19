import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad31_4b8g.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad31_4b8g"/>`,
		"fallback": "f7:rosette",
	});
}

export default Component;
