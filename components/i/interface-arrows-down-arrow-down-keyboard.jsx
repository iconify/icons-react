import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aseyl3-sf.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aseyl3-sf"/>`,
		"fallback": "streamline:interface-arrows-down-arrow-down-keyboard",
	});
}

export default Component;
