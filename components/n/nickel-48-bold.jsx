import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omdaj5bmv.css';
import '../../css/a/aq7muybgs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omdaj5bmv"/><path class="aq7muybgs"/>`,
		"fallback": "energy-icons:nickel-48-bold",
	});
}

export default Component;
