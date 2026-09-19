import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7vn2cb_f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7vn2cb_f"/>`,
		"fallback": "at-icons:tree-evergreen",
	});
}

export default Component;
