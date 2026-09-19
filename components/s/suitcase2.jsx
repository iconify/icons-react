import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h7b1f6mac.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h7b1f6mac"/>`,
		"fallback": "bi:suitcase2",
	});
}

export default Component;
