import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gzz5m-bbt.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gzz5m-bbt"/>`,
		"fallback": "fa7-solid:virus",
	});
}

export default Component;
