import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1o9flxbu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g1o9flxbu"/>`,
		"fallback": "streamline:not-equal-sign-remix",
	});
}

export default Component;
