import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx2_oc7fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xx2_oc7fr"/>`,
		"fallback": "ri:pulse-line",
	});
}

export default Component;
