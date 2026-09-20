import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_0em7blx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_0em7blx"/>`,
		"fallback": "mynaui:letter-v-octagon-solid",
	});
}

export default Component;
