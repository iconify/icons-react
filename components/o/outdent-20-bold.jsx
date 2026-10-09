import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cww23ibou.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cww23ibou"/>`,
		"fallback": "energy-icons:outdent-20-bold",
	});
}

export default Component;
