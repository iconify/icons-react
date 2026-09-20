import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw2vlobaw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw2vlobaw"/>`,
		"fallback": "pinhead:motorcycle-and-yen-yuan",
	});
}

export default Component;
