import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjoe9x-2f.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjoe9x-2f"/>`,
		"fallback": "map:post-office",
	});
}

export default Component;
