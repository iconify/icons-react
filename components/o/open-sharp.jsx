import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c5surlbgg.css';
import '../../css/s/stpx8h04v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c5surlbgg"/><path class="stpx8h04v"/>`,
		"fallback": "famicons:open-sharp",
	});
}

export default Component;
