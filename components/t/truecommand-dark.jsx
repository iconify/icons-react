import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qek00jbej.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qek00jbej"/>`,
		"fallback": "selfhst:truecommand-dark",
	});
}

export default Component;
