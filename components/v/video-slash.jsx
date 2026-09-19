import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xor048bxf.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xor048bxf"/>`,
		"fallback": "fa7-solid:video-slash",
	});
}

export default Component;
