import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fd10_3lgv.css';
import '../../css/u/uo2fs-9le.css';
import '../../css/n/nvpqntokq.css';
import '../../css/g/gkp75vytj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fd10_3lgv"/><path class="uo2fs-9le"/><path class="nvpqntokq"/><path class="gkp75vytj"/>`,
		"fallback": "energy-icons:valve-wheel-48",
	});
}

export default Component;
