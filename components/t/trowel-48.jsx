import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/thafg6bsi.css';
import '../../css/q/qglubxbcs.css';
import '../../css/l/lnfvw2unm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="thafg6bsi"/><path class="qglubxbcs"/><path class="lnfvw2unm"/>`,
		"fallback": "energy-icons:trowel-48",
	});
}

export default Component;
