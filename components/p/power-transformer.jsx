import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7jb9-9qt.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7jb9-9qt"/>`,
		"fallback": "temaki:power-transformer",
	});
}

export default Component;
