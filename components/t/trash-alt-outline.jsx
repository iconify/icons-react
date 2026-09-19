import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmhl_gbis.css';
import '../../css/s/ssrw9lb7d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lmhl_gbis"/><path clip-rule="evenodd" class="ssrw9lb7d"/>`,
		"fallback": "basil:trash-alt-outline",
	});
}

export default Component;
