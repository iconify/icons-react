import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axles5bjl.css';
import '../../css/g/guuynvblh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="axles5bjl"/><path class="guuynvblh"/>`,
		"fallback": "energy-icons:lockbox-20",
	});
}

export default Component;
