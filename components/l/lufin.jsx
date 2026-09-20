import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwn9qcb9d.css';
import '../../css/l/lpk12-20r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nwn9qcb9d"/><path class="lpk12-20r"/>`,
		"fallback": "selfhst:lufin",
	});
}

export default Component;
