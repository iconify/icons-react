import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pv_hji6de.css';
import '../../css/r/rhb1k3bmi.css';
import '../../css/i/il6nib2-h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pv_hji6de"/><path class="rhb1k3bmi"/><path class="il6nib2-h"/>`,
		"fallback": "solar:traffic-bold-duotone",
	});
}

export default Component;
