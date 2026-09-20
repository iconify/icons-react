import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfeui5blz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfeui5blz"/>`,
		"fallback": "selfhst:wanderer-dark",
	});
}

export default Component;
