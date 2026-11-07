import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m2t55rbji.css';
import '../../css/n/nxq0bqbft.css';
import '../../css/d/d99hl0bou.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m2t55rbji"/><path class="nxq0bqbft"/><path class="d99hl0bou"/>`,
		"fallback": "solar:phone-calling-bold",
	});
}

export default Component;
