import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aw3zcm17q.css';
import '../../css/g/gfq4fctyt.css';
import '../../css/e/ehkv7qbws.css';
import '../../css/g/grybs6pbt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aw3zcm17q"/><linearGradient id="SVGZ1KVcbaP" x1="49.834" x2="171.234" y1="331.136" y2="480.113" gradientTransform="matrix(1 0 0 -1 0 514.48)" gradientUnits="userSpaceOnUse"><stop offset="0" class="gfq4fctyt"/><stop offset="1" class="ehkv7qbws"/></linearGradient><circle fill="url(#SVGZ1KVcbaP)" class="grybs6pbt"/>`,
		"fallback": "selfhst:spinnerr",
	});
}

export default Component;
