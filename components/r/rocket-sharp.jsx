import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmiv43pty.css';
import '../../css/z/zpbo7acvu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmiv43pty"/><path class="zpbo7acvu"/>`,
		"fallback": "ion:rocket-sharp",
	});
}

export default Component;
