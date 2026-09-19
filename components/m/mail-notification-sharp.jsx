import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c4cmerb_j.css';
import '../../css/d/d8hhl9rhn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c4cmerb_j"/><path class="d8hhl9rhn"/>`,
		"fallback": "ion:mail-notification-sharp",
	});
}

export default Component;
