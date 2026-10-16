import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-flw2bql.css';
import '../../css/x/x-3i40bye.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-flw2bql"/><path class="x-3i40bye"/>`,
		"fallback": "energy-icons:nuclear-waste-48",
	});
}

export default Component;
