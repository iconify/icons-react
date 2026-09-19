import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t6pzuyx4r.css';
import '../../css/u/ufqy7fo2b.css';
import '../../css/x/xw_4jzbwo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="t6pzuyx4r"/><path class="ufqy7fo2b"/><path class="xw_4jzbwo"/>`,
		"fallback": "fxemoji:noentry",
	});
}

export default Component;
