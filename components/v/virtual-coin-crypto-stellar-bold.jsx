import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aaw89wbrk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aaw89wbrk"/>`,
		"fallback": "streamline-ultimate:virtual-coin-crypto-stellar-bold",
	});
}

export default Component;
