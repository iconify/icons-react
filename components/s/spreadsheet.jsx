import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/os3mvyh4i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="os3mvyh4i"/>`,
		"fallback": "entypo:spreadsheet",
	});
}

export default Component;
