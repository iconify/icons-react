import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/axj03hbdu.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="axj03hbdu"/>`,
		"fallback": "streamline-color:music-equalizer-flat",
	});
}

export default Component;
