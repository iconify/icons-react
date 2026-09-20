import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fvz532lhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fvz532lhr"/>`,
		"fallback": "selfhst:trmnl-light",
	});
}

export default Component;
