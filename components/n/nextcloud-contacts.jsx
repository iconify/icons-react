import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp1v2sdoj.css';
import '../../css/f/flltnf0xc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp1v2sdoj"/><path class="flltnf0xc"/>`,
		"fallback": "selfhst:nextcloud-contacts",
	});
}

export default Component;
