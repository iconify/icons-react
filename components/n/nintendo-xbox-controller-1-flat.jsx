import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b-qejkgsv.css';
import '../../css/q/qxjtv9r-q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b-qejkgsv"/><path class="qxjtv9r-q"/></g>`,
		"fallback": "streamline-plump-color:nintendo-xbox-controller-1-flat",
	});
}

export default Component;
