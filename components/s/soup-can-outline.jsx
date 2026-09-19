import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmq2wcbyn.css';
import '../../css/h/hhgbemb5k.css';
import '../../css/l/lve-jub9n.css';
import '../../css/y/yw0gu7yyd.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmq2wcbyn"/><path class="hhgbemb5k"/><path class="lve-jub9n"/><path class="yw0gu7yyd"/>`,
		"fallback": "ion:soup-can-outline",
	});
}

export default Component;
