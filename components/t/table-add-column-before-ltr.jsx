import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-o_fbdju.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-o_fbdju"/>`,
		"fallback": "ooui:table-add-column-before-ltr",
	});
}

export default Component;
