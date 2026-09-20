import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exl5b4b5k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="exl5b4b5k"/>`,
		"fallback": "streamline-flex:moustache",
	});
}

export default Component;
