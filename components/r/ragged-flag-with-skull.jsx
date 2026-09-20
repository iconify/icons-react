import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nl0md4byx.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nl0md4byx"/>`,
		"fallback": "pinhead:ragged-flag-with-skull",
	});
}

export default Component;
