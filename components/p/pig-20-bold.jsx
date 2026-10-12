import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbyolzb7w.css';
import '../../css/b/byv6wwb2b.css';
import '../../css/r/rv2qj4l3y.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbyolzb7w"/><path class="byv6wwb2b"/><path class="rv2qj4l3y"/>`,
		"fallback": "energy-icons:pig-20-bold",
	});
}

export default Component;
