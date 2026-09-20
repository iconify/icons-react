import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rwj6unb5t.css';
import '../../css/k/kcfkgy84u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rwj6unb5t"/><path clip-rule="evenodd" class="kcfkgy84u"/>`,
		"fallback": "streamline-block:travel-compass",
	});
}

export default Component;
