import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oz80rob8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oz80rob8i"/>`,
		"fallback": "thesvg:solveddotac",
	});
}

export default Component;
