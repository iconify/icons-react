import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/i/ign1pvbwc.css';
import '../../css/z/z9bbxfbbs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="ign1pvbwc"/><path class="z9bbxfbbs"/></g>`,
		"fallback": "icon-park-outline:sandals",
	});
}

export default Component;
