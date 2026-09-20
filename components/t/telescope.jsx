import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvnqahb0g.css';
import '../../css/e/e3rnhgbgh.css';
import '../../css/x/xtl81vb2a.css';
import '../../css/f/frwvw2bpc.css';
import '../../css/k/kp1_yialh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rvnqahb0g"><path class="e3rnhgbgh"/><path class="xtl81vb2a"/><path class="frwvw2bpc"/><path class="kp1_yialh"/></g>`,
		"fallback": "streamline-plump:telescope",
	});
}

export default Component;
