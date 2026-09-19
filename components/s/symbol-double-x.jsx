import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dafwinymz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dafwinymz"/>`,
		"fallback": "icon-park-outline:symbol-double-x",
	});
}

export default Component;
