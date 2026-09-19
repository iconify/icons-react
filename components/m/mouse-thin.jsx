import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/unvvrib7k.css';
import '../../css/i/i0ly9nmio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="unvvrib7k"/><path class="i0ly9nmio"/></g>`,
		"fallback": "iconamoon:mouse-thin",
	});
}

export default Component;
