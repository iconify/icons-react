import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndjmpsjgu.css';
import '../../css/e/est9gvb6j.css';
import '../../css/h/hbc_irb5l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndjmpsjgu"/><path class="est9gvb6j"/><path class="hbc_irb5l"/>`,
		"fallback": "fxemoji:sparklingheart",
	});
}

export default Component;
