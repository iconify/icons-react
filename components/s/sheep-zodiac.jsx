import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/u/uwyopsb1v.css';
import '../../css/g/go4cdrb9b.css';
import '../../css/x/x07div41m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="uwyopsb1v"/><path class="go4cdrb9b"/><path class="x07div41m"/></g>`,
		"fallback": "icon-park-outline:sheep-zodiac",
	});
}

export default Component;
