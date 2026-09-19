import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr1rmrbnz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pr1rmrbnz"/>`,
		"fallback": "hugeicons:rhombus-01",
	});
}

export default Component;
