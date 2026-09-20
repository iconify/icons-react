import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ov4c9mb1d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ov4c9mb1d"/>`,
		"fallback": "streamline-color:scanner",
	});
}

export default Component;
