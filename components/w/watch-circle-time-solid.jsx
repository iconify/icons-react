import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vot7kibza.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vot7kibza"/>`,
		"fallback": "streamline:watch-circle-time-solid",
	});
}

export default Component;
