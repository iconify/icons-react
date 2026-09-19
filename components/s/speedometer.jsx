import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c625vx81f.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c625vx81f"/>`,
		"fallback": "f7:speedometer",
	});
}

export default Component;
