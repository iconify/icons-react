import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b_09tab4h.css';
import '../../css/c/c807_0blv.css';
import '../../css/n/ns1f0lben.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b_09tab4h"/><path class="c807_0blv"/><path class="ns1f0lben"/>`,
		"fallback": "ix:viva-engage-logo",
	});
}

export default Component;
