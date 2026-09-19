import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a8m-_-bks.css';
import '../../css/j/juspnkb0e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a8m-_-bks"/><path class="juspnkb0e"/>`,
		"fallback": "ant-design:rest-outlined",
	});
}

export default Component;
