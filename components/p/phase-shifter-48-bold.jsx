import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agj07mbsi.css';
import '../../css/d/dmuhyjbsf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agj07mbsi"/><path class="dmuhyjbsf"/>`,
		"fallback": "energy-icons:phase-shifter-48-bold",
	});
}

export default Component;
