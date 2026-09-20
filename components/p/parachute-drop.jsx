import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/k/k7akwpbbx.css';
import '../../css/l/ll8fe0-ds.css';
import '../../css/s/spas5x30v.css';
import '../../css/y/ywzm4ifnv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="k7akwpbbx"/><path class="ll8fe0-ds"/><path class="spas5x30v"/><path class="ywzm4ifnv"/></g>`,
		"fallback": "streamline-plump-color:parachute-drop",
	});
}

export default Component;
