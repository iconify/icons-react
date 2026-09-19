import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xksh8usvk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xksh8usvk"/>`,
		"fallback": "carbon:volume-down-filled",
	});
}

export default Component;
