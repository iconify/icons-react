import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3wv0kwij.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3wv0kwij"/>`,
		"fallback": "sidekickicons:photo-plus-16-solid",
	});
}

export default Component;
