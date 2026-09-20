import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wtt_77_2b.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wtt_77_2b"/>`,
		"fallback": "osmic:prison-14",
	});
}

export default Component;
