import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmyl69bep.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmyl69bep"/>`,
		"fallback": "streamline:volcano",
	});
}

export default Component;
