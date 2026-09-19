import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-atscb1d.css';
import '../../css/f/flmcfydke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g-atscb1d"/><path class="flmcfydke"/>`,
		"fallback": "basil:wallet-solid",
	});
}

export default Component;
