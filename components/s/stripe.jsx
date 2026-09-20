import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hhz5ljcbr.css';
import '../../css/w/wees9lb4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hhz5ljcbr"/><path class="wees9lb4o"/>`,
		"fallback": "selfhst:stripe",
	});
}

export default Component;
