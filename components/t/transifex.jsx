import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g5smg0b8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g5smg0b8j"/>`,
		"fallback": "thesvg:transifex",
	});
}

export default Component;
