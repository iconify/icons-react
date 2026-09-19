import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4406ob8i.css';
import '../../css/y/yg04rqb5r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i4406ob8i"/><path class="yg04rqb5r"/>`,
		"fallback": "flat-color-icons:right-down",
	});
}

export default Component;
