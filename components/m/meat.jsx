import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b5em6cb4m.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b5em6cb4m"/>`,
		"fallback": "at-icons:meat",
	});
}

export default Component;
