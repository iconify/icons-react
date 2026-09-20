import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/raj7bybid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="raj7bybid"/>`,
		"fallback": "octicon:people-24",
	});
}

export default Component;
