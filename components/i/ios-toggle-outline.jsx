import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ude9i169c.css';
import '../../css/n/n1hfnlbgv.css';
import '../../css/a/azrmtruiz.css';
import '../../css/o/ots7eo6hs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ude9i169c"/><path class="n1hfnlbgv"/><g><path class="azrmtruiz"/><path class="ots7eo6hs"/></g>`,
		"fallback": "ion:ios-toggle-outline",
	});
}

export default Component;
