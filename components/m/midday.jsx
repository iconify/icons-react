import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i9dcd_-yi.css';
import '../../css/k/k132ggb9i.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="i9dcd_-yi"/><path clip-rule="evenodd" class="k132ggb9i"/></g>`,
		"fallback": "thesvg-color:midday",
	});
}

export default Component;
