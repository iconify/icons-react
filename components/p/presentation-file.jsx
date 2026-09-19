import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pzhvztb2z.css';
import '../../css/q/q44zm2bli.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pzhvztb2z"/><path class="q44zm2bli"/>`,
		"fallback": "carbon:presentation-file",
	});
}

export default Component;
