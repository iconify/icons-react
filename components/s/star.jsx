import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmnqnxbxk.css';

const viewBox = {"width":1664,"height":1600};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmnqnxbxk"/>`,
		"fallback": "fa:star",
	});
}

export default Component;
