import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qp1v2sdoj.css';
import '../../css/q/qbjjeubyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qp1v2sdoj"/><path class="qbjjeubyr"/>`,
		"fallback": "selfhst:nextcloud-office",
	});
}

export default Component;
