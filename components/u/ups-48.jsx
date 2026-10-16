import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-flw2bql.css';
import '../../css/i/ihgrfnbqw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-flw2bql"/><path class="ihgrfnbqw"/>`,
		"fallback": "energy-icons:ups-48",
	});
}

export default Component;
