import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vnf34i5ny.css';
import '../../css/u/uaeceybfr.css';
import '../../css/i/ixv5lcckr.css';
import '../../css/n/nyr1js5on.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vnf34i5ny"/><path class="uaeceybfr"/><path class="ixv5lcckr"/><path class="nyr1js5on"/>`,
		"fallback": "solar:trash-bin-trash-outline",
	});
}

export default Component;
