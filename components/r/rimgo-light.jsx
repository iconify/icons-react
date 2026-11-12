import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q615-bq5v.css';
import '../../css/k/k-og-_b4c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q615-bq5v"/><circle class="k-og-_b4c"/>`,
		"fallback": "selfhst:rimgo-light",
	});
}

export default Component;
