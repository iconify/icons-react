import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqbs8rbie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqbs8rbie"/>`,
		"fallback": "mingcute:usd-coin-usdc-line",
	});
}

export default Component;
