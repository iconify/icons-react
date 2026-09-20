import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q52nwgbhw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q52nwgbhw"/>`,
		"fallback": "simple-icons:kuaishou",
	});
}

export default Component;
