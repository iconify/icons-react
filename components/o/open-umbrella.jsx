import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mcr02fcny.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mcr02fcny"/>`,
		"fallback": "streamline:open-umbrella",
	});
}

export default Component;
