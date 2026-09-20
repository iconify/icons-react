import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/smxvd6p6i.css';
import '../../css/p/pe_k9tbko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="smxvd6p6i"/><path class="pe_k9tbko"/>`,
		"fallback": "token:launch",
	});
}

export default Component;
