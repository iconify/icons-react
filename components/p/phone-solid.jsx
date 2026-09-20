import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gwoahcb7d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gwoahcb7d"/>`,
		"fallback": "streamline:phone-solid",
	});
}

export default Component;
