import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cbfian71j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cbfian71j"/>`,
		"fallback": "si:wallet-detailed-line",
	});
}

export default Component;
