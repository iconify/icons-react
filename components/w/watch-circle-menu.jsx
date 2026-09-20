import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xck5rbc3z.css';
import '../../css/q/qukbue1xj.css';
import '../../css/s/sghdsfbgj.css';
import '../../css/x/x2us53blj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xck5rbc3z"><path class="qukbue1xj"/><path class="sghdsfbgj"/><path class="x2us53blj"/></g>`,
		"fallback": "streamline-plump:watch-circle-menu",
	});
}

export default Component;
