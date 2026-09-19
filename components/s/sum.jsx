import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/efbgwnbij.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="efbgwnbij"/>`,
		"fallback": "icon-park:sum",
	});
}

export default Component;
