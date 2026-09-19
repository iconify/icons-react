import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex2k96bqi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex2k96bqi"/>`,
		"fallback": "icon-park-outline:triangular-pyramid",
	});
}

export default Component;
