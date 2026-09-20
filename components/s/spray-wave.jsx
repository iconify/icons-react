import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/my15a3bbi.css';
import '../../css/f/flmf5xgib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="my15a3bbi"/><path class="flmf5xgib"/></g>`,
		"fallback": "pixelarticons:spray-wave",
	});
}

export default Component;
