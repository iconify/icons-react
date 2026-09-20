import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kao537bdv.css';
import '../../css/b/bhrtkjeyz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kao537bdv"/><path class="bhrtkjeyz"/>`,
		"fallback": "selfhst:lumio-dark",
	});
}

export default Component;
