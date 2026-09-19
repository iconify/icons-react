import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q4a-oac3f.css';
import '../../css/k/klwyf98zv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q4a-oac3f"/><path class="klwyf98zv"/>`,
		"fallback": "famicons:trending-down-sharp",
	});
}

export default Component;
