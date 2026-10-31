import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/swnrakhrf.css';
import '../../css/f/fa_le4uqt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="swnrakhrf"/><path class="fa_le4uqt"/></g>`,
		"fallback": "coolicons:layout-template-duotone-round",
	});
}

export default Component;
