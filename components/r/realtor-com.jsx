import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z00tr3bse.css';
import '../../css/i/i8n-k03nl.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z00tr3bse"/><path class="i8n-k03nl"/>`,
		"fallback": "selfhst:realtor-com",
	});
}

export default Component;
