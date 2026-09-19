import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ive6bserv.css';
import '../../css/u/ur8mbpnqr.css';
import '../../css/n/nxheq_lap.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ive6bserv"/><circle class="ur8mbpnqr"/><path class="nxheq_lap"/>`,
		"fallback": "foundation:shopping-cart",
	});
}

export default Component;
