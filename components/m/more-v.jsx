import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zzvafrbmj.css';

const viewBox = {"width":5,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zzvafrbmj"/>`,
		"fallback": "fontisto:more-v",
	});
}

export default Component;
