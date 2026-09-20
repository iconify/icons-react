import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rm7ss7bki.css';
import '../../css/g/gm0rcf1lu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rm7ss7bki"/><path class="gm0rcf1lu"/>`,
		"fallback": "selfhst:reactflux",
	});
}

export default Component;
