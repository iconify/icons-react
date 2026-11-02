import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/f1msnb5-c.css';
import '../../css/p/pshki8f7n.css';
import '../../css/d/dtmyh0hhv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="f1msnb5-c"/><path class="pshki8f7n"/><path class="dtmyh0hhv"/></g>`,
		"fallback": "matita:sailboat",
	});
}

export default Component;
