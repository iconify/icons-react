import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k1_2fvbtc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="k1_2fvbtc"/>`,
		"fallback": "streamline:wallet-purse-solid",
	});
}

export default Component;
