import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zlxr77pgx.css';
import '../../css/j/jrey48bji.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zlxr77pgx"/><path class="jrey48bji"/>`,
		"fallback": "qlementine-icons:layers-2-16",
	});
}

export default Component;
