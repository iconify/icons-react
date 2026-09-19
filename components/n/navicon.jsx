import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glgc2s32b.css';
import '../../css/t/t6zyl3h8b.css';
import '../../css/n/naljiqsza.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glgc2s32b"/><path class="t6zyl3h8b"/><path class="naljiqsza"/>`,
		"fallback": "ion:navicon",
	});
}

export default Component;
