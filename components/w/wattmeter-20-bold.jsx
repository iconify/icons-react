import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rab_xlb9n.css';
import '../../css/q/qv1h0pygk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rab_xlb9n"/><path class="qv1h0pygk"/>`,
		"fallback": "energy-icons:wattmeter-20-bold",
	});
}

export default Component;
