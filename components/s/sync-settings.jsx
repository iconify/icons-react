import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g34r42blo.css';
import '../../css/c/czru7nb1u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g34r42blo"/><path class="czru7nb1u"/>`,
		"fallback": "carbon:sync-settings",
	});
}

export default Component;
