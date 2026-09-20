import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/abb0r2bas.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="abb0r2bas"/>`,
		"fallback": "streamline-plump:stopwatch-half-remix",
	});
}

export default Component;
