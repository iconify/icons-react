import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/obc9sh-4y.css';
import '../../css/j/jm-104bqg.css';
import '../../css/f/frztjqr5l.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="obc9sh-4y"/><path class="jm-104bqg"/><path class="frztjqr5l"/>`,
		"fallback": "ion:ios-school",
	});
}

export default Component;
