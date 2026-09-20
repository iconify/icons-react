import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpb_-2b7f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rpb_-2b7f"/>`,
		"fallback": "selfhst:inventree-light",
	});
}

export default Component;
