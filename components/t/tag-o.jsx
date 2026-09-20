import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yob_hi-cq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yob_hi-cq"/>`,
		"fallback": "uiw:tag-o",
	});
}

export default Component;
