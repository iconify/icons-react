import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mvm041b2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mvm041b2a"/>`,
		"fallback": "mynaui:letter-i-octagon",
	});
}

export default Component;
