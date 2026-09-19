import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qswzwyq-a.css';

const viewBox = {"width":21,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qswzwyq-a"/>`,
		"fallback": "fontisto:tty",
	});
}

export default Component;
