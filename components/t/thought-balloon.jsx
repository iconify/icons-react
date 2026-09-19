import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrk2n349e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nrk2n349e"/>`,
		"fallback": "fluent-emoji-high-contrast:thought-balloon",
	});
}

export default Component;
