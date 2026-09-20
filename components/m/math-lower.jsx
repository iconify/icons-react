import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eme4g79qd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eme4g79qd"/>`,
		"fallback": "tabler:math-lower",
	});
}

export default Component;
