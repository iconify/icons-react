import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mo7956bee.css';
import '../../css/a/asu1pqv5y.css';
import '../../css/n/n2cwm3b-l.css';
import '../../css/y/yw1-5cc1y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mo7956bee"/><path class="asu1pqv5y"/><path class="n2cwm3b-l"/><path class="yw1-5cc1y"/>`,
		"fallback": "selfhst:sando-light",
	});
}

export default Component;
