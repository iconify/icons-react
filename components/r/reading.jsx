import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zip20upao.css';
import '../../css/b/b4jm4y-yv.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zip20upao"/><path class="b4jm4y-yv"/>`,
		"fallback": "ep:reading",
	});
}

export default Component;
