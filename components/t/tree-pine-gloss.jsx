import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjxa9--aw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjxa9--aw"/>`,
		"fallback": "withicons:tree-pine-gloss",
	});
}

export default Component;
