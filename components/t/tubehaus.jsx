import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxqmevb6p.css';
import '../../css/p/pan7dlbeh.css';
import '../../css/s/sjj76ybgs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="uxqmevb6p"/><path class="pan7dlbeh"/><path class="sjj76ybgs"/>`,
		"fallback": "selfhst:tubehaus",
	});
}

export default Component;
