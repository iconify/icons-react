import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7zcibcfy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7zcibcfy"/>`,
		"fallback": "bi:suit-spade",
	});
}

export default Component;
