import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7kxs_g1s.css';
import '../../css/n/n35dlibfy.css';
import '../../css/d/dyzbezbug.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7kxs_g1s"/><path class="n35dlibfy"/><path class="dyzbezbug"/></g>`,
		"fallback": "iconamoon:location-pin-off-duotone",
	});
}

export default Component;
