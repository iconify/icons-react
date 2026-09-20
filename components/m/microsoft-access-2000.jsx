import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sibkcjb8c.css';
import '../../css/i/ii43a9b1h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sibkcjb8c"/><path class="ii43a9b1h"/>`,
		"fallback": "selfhst:microsoft-access-2000",
	});
}

export default Component;
