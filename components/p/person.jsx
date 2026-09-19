import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vpmf8sb0z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vpmf8sb0z"/>`,
		"fallback": "famicons:person",
	});
}

export default Component;
