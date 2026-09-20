import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jsc-4-bas.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jsc-4-bas"/>`,
		"fallback": "pinhead:shoe-under-shower-spray",
	});
}

export default Component;
