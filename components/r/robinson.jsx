import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loedw3efo.css';
import '../../css/f/fas83m7xm.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loedw3efo"/><path class="fas83m7xm"/>`,
		"fallback": "selfhst:robinson",
	});
}

export default Component;
