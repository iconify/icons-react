import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzdafi6np.css';
import '../../css/x/xlao23b1c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzdafi6np"/><path class="xlao23b1c"/>`,
		"fallback": "selfhst:nasa-dark",
	});
}

export default Component;
