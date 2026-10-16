import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/n/nb144-0ui.css';
import '../../css/d/dku8h8g5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="nb144-0ui"/><path class="dku8h8g5m"/>`,
		"fallback": "energy-icons:merit-order-48",
	});
}

export default Component;
