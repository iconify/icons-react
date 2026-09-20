import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k5yu1qb-n.css';
import '../../css/t/tmnoc9bjp.css';
import '../../css/z/zeq616bts.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k5yu1qb-n"/><path class="tmnoc9bjp"/><path class="zeq616bts"/>`,
		"fallback": "selfhst:invoiceplane-dark",
	});
}

export default Component;
