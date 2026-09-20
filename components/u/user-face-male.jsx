import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/s04pznble.css';
import '../../css/v/v77trl8mq.css';
import '../../css/d/dop-fab9n.css';
import '../../css/z/z85cyrtvm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="s04pznble"/><path class="v77trl8mq"/><path class="dop-fab9n"/><path class="z85cyrtvm"/></g>`,
		"fallback": "streamline-plump-color:user-face-male",
	});
}

export default Component;
