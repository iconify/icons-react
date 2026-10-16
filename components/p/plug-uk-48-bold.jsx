import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ef0-97kcs.css';
import '../../css/p/plk_--7pi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ef0-97kcs"/><path class="plk_--7pi"/>`,
		"fallback": "energy-icons:plug-uk-48-bold",
	});
}

export default Component;
