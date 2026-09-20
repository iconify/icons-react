import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sf961uwtu.css';
import '../../css/n/nyawz3e_u.css';
import '../../css/e/e2u2rabga.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="sf961uwtu"/><path class="nyawz3e_u"/><path clip-rule="evenodd" class="e2u2rabga"/>`,
		"fallback": "qlementine-icons:ogg-16",
	});
}

export default Component;
