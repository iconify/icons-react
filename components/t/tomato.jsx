import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rraxkz3pj.css';
import '../../css/x/xkzec0bek.css';
import '../../css/x/xv0u4cfsn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rraxkz3pj"/><path class="xkzec0bek"/><path class="xv0u4cfsn"/>`,
		"fallback": "fxemoji:tomato",
	});
}

export default Component;
