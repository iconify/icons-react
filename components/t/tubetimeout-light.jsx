import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za9rxhb1i.css';
import '../../css/h/hhrevwgtq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za9rxhb1i"/><path class="hhrevwgtq"/>`,
		"fallback": "selfhst:tubetimeout-light",
	});
}

export default Component;
