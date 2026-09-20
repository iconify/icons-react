import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-f93z-og.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g-f93z-og"/>`,
		"fallback": "streamline-ultimate:virtual-coin-crypto-ethereum-bold",
	});
}

export default Component;
