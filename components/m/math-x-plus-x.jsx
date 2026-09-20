import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oyaxeyu_f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oyaxeyu_f"/>`,
		"fallback": "tabler:math-x-plus-x",
	});
}

export default Component;
