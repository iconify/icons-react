import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q615-bq5v.css';
import '../../css/e/eb1q3ccfq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q615-bq5v"/><circle class="eb1q3ccfq"/>`,
		"fallback": "selfhst:rimgo-light",
	});
}

export default Component;
