import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lc24wmb0f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lc24wmb0f"/>`,
		"fallback": "vadivam:mic",
	});
}

export default Component;
