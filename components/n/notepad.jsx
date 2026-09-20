import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b18u8acww.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b18u8acww"/>`,
		"fallback": "lineicons:notepad",
	});
}

export default Component;
