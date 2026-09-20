import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg414d5aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg414d5aa"/>`,
		"fallback": "ri:slash-commands-2",
	});
}

export default Component;
