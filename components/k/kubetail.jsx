import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uqcszbc6x.css';
import '../../css/e/ety_7rmqz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uqcszbc6x"/><path class="ety_7rmqz"/>`,
		"fallback": "selfhst:kubetail",
	});
}

export default Component;
