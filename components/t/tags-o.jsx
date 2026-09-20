import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5os33b0c.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5os33b0c"/>`,
		"fallback": "uiw:tags-o",
	});
}

export default Component;
