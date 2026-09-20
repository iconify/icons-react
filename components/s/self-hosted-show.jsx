import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pixd3le1c.css';
import '../../css/n/nspe8_bkd.css';
import '../../css/r/r-0tybctz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="pixd3le1c"/><path class="nspe8_bkd"/><path class="r-0tybctz"/>`,
		"fallback": "selfhst:self-hosted-show",
	});
}

export default Component;
