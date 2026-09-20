import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r48o9ebhr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r48o9ebhr"/>`,
		"fallback": "selfhst:t-mobile-dark",
	});
}

export default Component;
