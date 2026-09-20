import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv5_69tgt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rv5_69tgt"/>`,
		"fallback": "streamline:volume-level-low",
	});
}

export default Component;
