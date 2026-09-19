import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/v/vgtv_oh1j.css';
import '../../css/o/o5w75mhcf.css';
import '../../css/f/fa9k3vpzp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="vgtv_oh1j"/><path class="o5w75mhcf"/><path class="fa9k3vpzp"/></g>`,
		"fallback": "icon-park-outline:terrace",
	});
}

export default Component;
