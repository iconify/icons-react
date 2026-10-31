import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/twmzk4eiv.css';
import '../../css/u/utxjkrwff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="twmzk4eiv"/><path class="utxjkrwff"/></g>`,
		"fallback": "coolicons:search-sparkle-duotone-round",
	});
}

export default Component;
