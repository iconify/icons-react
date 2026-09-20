import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/djn8p2b7h.css';
import '../../css/x/xefnkubua.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="djn8p2b7h"/><path class="xefnkubua"/>`,
		"fallback": "selfhst:metabase",
	});
}

export default Component;
