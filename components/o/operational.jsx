import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-h5b6a8z.css';
import '../../css/m/mqn54kwig.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-h5b6a8z"/><path class="mqn54kwig"/>`,
		"fallback": "selfhst:operational",
	});
}

export default Component;
