import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vh70epuyr.css';
import '../../css/v/v4_ncezad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vh70epuyr"/><path class="v4_ncezad"/>`,
		"fallback": "fxemoji:reminder",
	});
}

export default Component;
