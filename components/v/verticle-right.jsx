import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hctyz9b5p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hctyz9b5p"/>`,
		"fallback": "uiw:verticle-right",
	});
}

export default Component;
