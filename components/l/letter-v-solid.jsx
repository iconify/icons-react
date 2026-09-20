import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p51e5geti.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p51e5geti"/>`,
		"fallback": "mynaui:letter-v-solid",
	});
}

export default Component;
