import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pwu8u915q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pwu8u915q"/>`,
		"fallback": "tabler:math-function-y",
	});
}

export default Component;
