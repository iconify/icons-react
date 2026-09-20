import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mfpxhqb2g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mfpxhqb2g"/>`,
		"fallback": "tabler:math-x-minus-y",
	});
}

export default Component;
