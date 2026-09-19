import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvvpbts5o.css';
import '../../css/t/txrxn8dlv.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="cvvpbts5o"/><path class="txrxn8dlv"/>`,
		"fallback": "devicon-plain:nixos-wordmark",
	});
}

export default Component;
