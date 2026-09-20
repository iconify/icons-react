import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uh9y58amt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uh9y58amt"/>`,
		"fallback": "selfhst:slashdot-dark",
	});
}

export default Component;
