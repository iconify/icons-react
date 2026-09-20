import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/neo39kk3j.css';
import '../../css/e/e5z8i_kna.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="neo39kk3j"/><path class="e5z8i_kna"/>`,
		"fallback": "selfhst:vimeo",
	});
}

export default Component;
