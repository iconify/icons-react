import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rki2gpn-k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rki2gpn-k"/>`,
		"fallback": "iconaut:test-tube-solid",
	});
}

export default Component;
