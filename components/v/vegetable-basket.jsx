import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/v/v_-t39mhq.css';
import '../../css/g/gc6zqzbzy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="v_-t39mhq"/><path class="gc6zqzbzy"/></g>`,
		"fallback": "icon-park-outline:vegetable-basket",
	});
}

export default Component;
