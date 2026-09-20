import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osu97bcqi.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osu97bcqi"/>`,
		"fallback": "streamline:religion-cross-1-religion-cross-culture-bold",
	});
}

export default Component;
