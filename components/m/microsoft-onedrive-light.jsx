import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/accicg2ns.css';
import '../../css/l/ldtpmn0ux.css';
import '../../css/l/l52qpcb9d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="accicg2ns"/><path class="ldtpmn0ux"/><path class="l52qpcb9d"/>`,
		"fallback": "selfhst:microsoft-onedrive-light",
	});
}

export default Component;
