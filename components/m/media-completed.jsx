import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nggwpp-aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nggwpp-aq"/>`,
		"fallback": "nrk:media-completed",
	});
}

export default Component;
