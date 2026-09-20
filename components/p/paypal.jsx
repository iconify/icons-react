import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t90i62flf.css';
import '../../css/r/re_renben.css';
import '../../css/a/aw5f0f-8s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t90i62flf"/><path class="re_renben"/><path class="aw5f0f-8s"/>`,
		"fallback": "selfhst:paypal",
	});
}

export default Component;
