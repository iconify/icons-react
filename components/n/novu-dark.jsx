import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mtyemfz0d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mtyemfz0d"/>`,
		"fallback": "selfhst:novu-dark",
	});
}

export default Component;
