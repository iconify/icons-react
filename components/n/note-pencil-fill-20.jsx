import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3m5nx0ys.css';
import '../../css/u/u2i0qcb0l.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3m5nx0ys"/><path class="u2i0qcb0l"/>`,
		"fallback": "garden:note-pencil-fill-20",
	});
}

export default Component;
