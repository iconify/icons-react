import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xal163byg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xal163byg"/>`,
		"fallback": "icon-park-solid:parallelogram",
	});
}

export default Component;
