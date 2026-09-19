import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r8kv0lb4e.css';
import '../../css/p/p_echrb7k.css';
import '../../css/i/ilk47r1wz.css';
import '../../css/m/m9jrbcbdh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r8kv0lb4e"/><path class="p_echrb7k"/><path class="ilk47r1wz"/><path class="m9jrbcbdh"/>`,
		"fallback": "ion:ios-printer",
	});
}

export default Component;
