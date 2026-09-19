import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xay0qpuko.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xay0qpuko"/>`,
		"fallback": "flat-color-icons:phone",
	});
}

export default Component;
