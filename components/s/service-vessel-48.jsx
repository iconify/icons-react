import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x_h9q26nq.css';
import '../../css/y/yhqod3b-i.css';
import '../../css/v/vf1hj485a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x_h9q26nq"/><path class="yhqod3b-i"/><path class="vf1hj485a"/>`,
		"fallback": "energy-icons:service-vessel-48",
	});
}

export default Component;
