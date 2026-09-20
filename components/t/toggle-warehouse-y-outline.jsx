import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5muy2b4s.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5muy2b4s"/>`,
		"fallback": "lsicon:toggle-warehouse-y-outline",
	});
}

export default Component;
