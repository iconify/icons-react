import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn-0rhblv.css';
import '../../css/e/e3n6u6z4p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn-0rhblv"/><path class="e3n6u6z4p"/>`,
		"fallback": "energy-icons:solar-lantern-48",
	});
}

export default Component;
