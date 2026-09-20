import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m-s8rx_ul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m-s8rx_ul"/>`,
		"fallback": "keyline-icons:subtitles",
	});
}

export default Component;
