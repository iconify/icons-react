import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m67a5vrnh.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m67a5vrnh"/>`,
		"fallback": "f7:shuffle",
	});
}

export default Component;
