import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qx39v221s.css';
import '../../css/i/iyxkfqbbg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qx39v221s"/><path class="iyxkfqbbg"/></g>`,
		"fallback": "streamline-plump:rectangle-flag",
	});
}

export default Component;
