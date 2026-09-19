import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ohonk9mbe.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ohonk9mbe"/>`,
		"fallback": "f7:play-rectangle-fill",
	});
}

export default Component;
