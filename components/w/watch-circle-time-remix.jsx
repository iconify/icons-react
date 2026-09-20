import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbk3j_dhf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pbk3j_dhf"/>`,
		"fallback": "streamline:watch-circle-time-remix",
	});
}

export default Component;
