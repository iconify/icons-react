import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mabrn8b9x.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mabrn8b9x"/>`,
		"fallback": "selfhst:qui",
	});
}

export default Component;
