import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uggdc9ofk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uggdc9ofk"/>`,
		"fallback": "tabler:math-y-plus-y",
	});
}

export default Component;
