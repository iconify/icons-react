import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/way8m64gv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="way8m64gv"/>`,
		"fallback": "selfhst:nodecast-tv-dark",
	});
}

export default Component;
