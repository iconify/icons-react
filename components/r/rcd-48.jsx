import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp-8xbcar.css';
import '../../css/l/luu7bn_8g.css';
import '../../css/b/btws7t3pu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp-8xbcar"/><path class="luu7bn_8g"/><path class="btws7t3pu"/>`,
		"fallback": "energy-icons:rcd-48",
	});
}

export default Component;
