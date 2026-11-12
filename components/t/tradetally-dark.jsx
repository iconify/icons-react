import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scob2eb_t.css';
import '../../css/d/dl8utqb_s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scob2eb_t"/><path class="dl8utqb_s"/>`,
		"fallback": "selfhst:tradetally-dark",
	});
}

export default Component;
