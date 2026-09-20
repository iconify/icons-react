import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ukdgz6b1q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ukdgz6b1q"/>`,
		"fallback": "temaki:viewpoint",
	});
}

export default Component;
