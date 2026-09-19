import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ozrj7jdhs.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ozrj7jdhs"/>`,
		"fallback": "at-icons:jigsaw-piece",
	});
}

export default Component;
