import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/accicg2ns.css';
import '../../css/w/wicut5btr.css';
import '../../css/l/le8lm-bsi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="accicg2ns"/><path class="wicut5btr"/><path class="le8lm-bsi"/>`,
		"fallback": "selfhst:microsoft-onedrive-light",
	});
}

export default Component;
