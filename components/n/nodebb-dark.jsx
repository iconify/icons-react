import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q30f-ac4d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q30f-ac4d"/>`,
		"fallback": "selfhst:nodebb-dark",
	});
}

export default Component;
