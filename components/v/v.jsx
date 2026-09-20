import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nldui7bwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nldui7bwn"/>`,
		"fallback": "thesvg:v",
	});
}

export default Component;
