import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4gxffbkg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4gxffbkg"/>`,
		"fallback": "tabler:math-1-divide-2",
	});
}

export default Component;
