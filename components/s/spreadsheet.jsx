import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o6d9bfo-j.css';
import '../../css/e/ezjzxdbqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o6d9bfo-j"/><path class="ezjzxdbqw"/>`,
		"fallback": "bx:spreadsheet",
	});
}

export default Component;
