import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/r/rc0v0t5_w.css';
import '../../css/y/y67c9vopq.css';
import '../../css/g/gavebgz5n.css';
import '../../css/g/gtm_9hbvt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="rc0v0t5_w"/><path class="y67c9vopq"/><path class="gavebgz5n"/><path class="gtm_9hbvt"/></g>`,
		"fallback": "streamline-plump-color:target-3",
	});
}

export default Component;
