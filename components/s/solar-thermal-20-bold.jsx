import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b52to0bjp.css';
import '../../css/p/pfj9i6b-u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b52to0bjp"/><path class="pfj9i6b-u"/>`,
		"fallback": "energy-icons:solar-thermal-20-bold",
	});
}

export default Component;
