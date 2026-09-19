import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2_6ab4it.css';
import '../../css/e/e8i0a8b0w.css';
import '../../css/e/e7ehw2nvg.css';
import '../../css/p/pd98uok3k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2_6ab4it"/><path class="e8i0a8b0w"/><path class="e7ehw2nvg"/><circle class="pd98uok3k"/></g>`,
		"fallback": "icon-park:rabbit-zodiac",
	});
}

export default Component;
