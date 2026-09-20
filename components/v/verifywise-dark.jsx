import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak0q_ccse.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak0q_ccse"/>`,
		"fallback": "selfhst:verifywise-dark",
	});
}

export default Component;
