import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dms1fbzlt.css';
import '../../css/r/rxjk7ymwc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dms1fbzlt"/><path class="rxjk7ymwc"/>`,
		"fallback": "fxemoji:raisedhandpartfingers",
	});
}

export default Component;
