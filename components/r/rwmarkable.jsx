import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd-si8bfj.css';
import '../../css/z/zn8lzqb4y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xd-si8bfj"/><path class="zn8lzqb4y"/>`,
		"fallback": "selfhst:rwmarkable",
	});
}

export default Component;
