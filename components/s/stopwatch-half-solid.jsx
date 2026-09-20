import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cxm9n-bwz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cxm9n-bwz"/>`,
		"fallback": "streamline-plump:stopwatch-half-solid",
	});
}

export default Component;
