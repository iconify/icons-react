import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s1r1-eb4d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s1r1-eb4d"/>`,
		"fallback": "f7:resize-v",
	});
}

export default Component;
