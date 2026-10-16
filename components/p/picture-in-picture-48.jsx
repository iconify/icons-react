import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tsmhpgwcs.css';
import '../../css/c/c_1sw_nww.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tsmhpgwcs"/><path class="c_1sw_nww"/>`,
		"fallback": "energy-icons:picture-in-picture-48",
	});
}

export default Component;
