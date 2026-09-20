import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmb9b00_p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmb9b00_p"/>`,
		"fallback": "selfhst:kjell-company-light",
	});
}

export default Component;
