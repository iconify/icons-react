import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2v-92ycv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d2v-92ycv"/>`,
		"fallback": "selfhst:microsoft-onenote-2013-light",
	});
}

export default Component;
