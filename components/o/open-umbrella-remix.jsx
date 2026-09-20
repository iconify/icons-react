import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nwnuw_b-j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nwnuw_b-j"/>`,
		"fallback": "streamline:open-umbrella-remix",
	});
}

export default Component;
