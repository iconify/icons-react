import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ja77f2b5e.css';
import '../../css/s/sb-7x_b3r.css';
import '../../css/f/fzmbfkb6j.css';

const viewBox = {"width":120,"height":120};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ja77f2b5e"><circle class="sb-7x_b3r"/><path class="fzmbfkb6j"/></g>`,
		"fallback": "thesvg:nodebo",
	});
}

export default Component;
