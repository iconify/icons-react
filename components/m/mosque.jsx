import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/pnv8w4bim.css';
import '../../css/i/ia_uw_5zb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="pnv8w4bim"/><path class="ia_uw_5zb"/></g>`,
		"fallback": "lucide:mosque",
	});
}

export default Component;
