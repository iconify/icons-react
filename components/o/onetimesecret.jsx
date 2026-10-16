import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v22tdl34m.css';
import '../../css/x/xn2g6_jxx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="v22tdl34m"/><path class="xn2g6_jxx"/>`,
		"fallback": "thesvg-color:onetimesecret",
	});
}

export default Component;
