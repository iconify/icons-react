import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/meqtli98k.css';
import '../../css/m/my0pxftfv.css';
import '../../css/t/tqets1biq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="meqtli98k"/><path class="my0pxftfv"/><path class="tqets1biq"/>`,
		"fallback": "selfhst:microsoft-powerpoint-dark",
	});
}

export default Component;
