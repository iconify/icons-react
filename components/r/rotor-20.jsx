import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zipe_1bgb.css';
import '../../css/w/w2ey4wbpi.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zipe_1bgb"/><path class="w2ey4wbpi"/>`,
		"fallback": "energy-icons:rotor-20",
	});
}

export default Component;
