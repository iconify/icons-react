import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmeey5brg.css';
import '../../css/q/q194_cbxg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmeey5brg"/><path class="q194_cbxg"/>`,
		"fallback": "selfhst:openeuler",
	});
}

export default Component;
