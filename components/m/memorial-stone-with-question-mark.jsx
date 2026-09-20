import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r4knz0mmr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r4knz0mmr"/>`,
		"fallback": "pinhead:memorial-stone-with-question-mark",
	});
}

export default Component;
