import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swkylxb0c.css';
import '../../css/x/xnoj2lhrt.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swkylxb0c"/><path class="xnoj2lhrt"/>`,
		"fallback": "openmoji:right-arrow-curving-down",
	});
}

export default Component;
