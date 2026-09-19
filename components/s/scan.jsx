import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tsu7ond6o.css';
import '../../css/t/twcv5_bvz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tsu7ond6o"/><path class="twcv5_bvz"/></g>`,
		"fallback": "icon-park-outline:scan",
	});
}

export default Component;
