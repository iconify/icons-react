import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k8pvvxb7n.css';
import '../../css/l/la0-jxkpj.css';
import '../../css/p/pc9orgmht.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="k8pvvxb7n"/><path class="la0-jxkpj"/><path class="pc9orgmht"/></g>`,
		"fallback": "streamline-plump-color:navigation-arrow-off",
	});
}

export default Component;
