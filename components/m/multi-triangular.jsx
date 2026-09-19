import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xduc6cb9t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xduc6cb9t"/>`,
		"fallback": "icon-park-outline:multi-triangular",
	});
}

export default Component;
