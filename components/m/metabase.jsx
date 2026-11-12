import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fqmbxsbsp.css';
import '../../css/x/xefnkubua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fqmbxsbsp"/><path class="xefnkubua"/>`,
		"fallback": "selfhst:metabase",
	});
}

export default Component;
