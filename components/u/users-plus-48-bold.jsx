import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3r4dhb5z.css';
import '../../css/l/l9jgh7bvz.css';
import '../../css/s/st45emjbc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l3r4dhb5z"/><path class="l9jgh7bvz"/><path class="st45emjbc"/>`,
		"fallback": "energy-icons:users-plus-48-bold",
	});
}

export default Component;
