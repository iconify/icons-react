import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rp4vfxbbs.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rp4vfxbbs"/>`,
		"fallback": "fa7-solid:undo",
	});
}

export default Component;
