import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uyvnanrur.css';
import '../../css/n/nk5v6ac6d.css';
import '../../css/p/pkdbtxbsn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uyvnanrur"/><path class="nk5v6ac6d"/><path class="pkdbtxbsn"/>`,
		"fallback": "energy-icons:plant-48-bold",
	});
}

export default Component;
