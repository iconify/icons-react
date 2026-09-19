import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rdynctb1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rdynctb1f"/>`,
		"fallback": "fluent-emoji-high-contrast:rainbow-flag",
	});
}

export default Component;
