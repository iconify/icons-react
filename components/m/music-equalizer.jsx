import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yt2iqb_gp.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yt2iqb_gp"/>`,
		"fallback": "streamline-color:music-equalizer",
	});
}

export default Component;
