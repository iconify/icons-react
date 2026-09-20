import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p4yfrjbsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p4yfrjbsk"/>`,
		"fallback": "simple-icons:nomad",
	});
}

export default Component;
