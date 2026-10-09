import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9in_db-o.css';
import '../../css/i/ivhqrxbjl.css';
import '../../css/o/ov0i-wazh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9in_db-o"/><path class="ivhqrxbjl"/><path class="ov0i-wazh"/>`,
		"fallback": "energy-icons:offset-20-bold",
	});
}

export default Component;
