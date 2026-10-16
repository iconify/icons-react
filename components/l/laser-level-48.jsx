import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkry5yh6w.css';
import '../../css/v/vt7mt9-ct.css';
import '../../css/w/wl8gimjuu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkry5yh6w"/><path class="vt7mt9-ct"/><path class="wl8gimjuu"/>`,
		"fallback": "energy-icons:laser-level-48",
	});
}

export default Component;
