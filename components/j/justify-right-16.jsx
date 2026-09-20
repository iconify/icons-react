import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjihciu7t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bjihciu7t"/>`,
		"fallback": "qlementine-icons:justify-right-16",
	});
}

export default Component;
