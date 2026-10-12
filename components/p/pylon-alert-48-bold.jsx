import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kfu5g5uib.css';
import '../../css/o/o63gs7ffv.css';
import '../../css/n/ne8de7own.css';
import '../../css/h/h8pwwo5-k.css';
import '../../css/g/gaaj6mban.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kfu5g5uib"/><path class="o63gs7ffv"/><path class="ne8de7own"/><path class="h8pwwo5-k"/><path class="gaaj6mban"/>`,
		"fallback": "energy-icons:pylon-alert-48-bold",
	});
}

export default Component;
