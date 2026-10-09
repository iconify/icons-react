import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6zve7bwi.css';
import '../../css/d/dgtzafb0o.css';
import '../../css/y/y81j8fbuw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6zve7bwi"/><path class="dgtzafb0o"/><path class="y81j8fbuw"/>`,
		"fallback": "energy-icons:thermometer-down-20",
	});
}

export default Component;
