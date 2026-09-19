import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln6oktiqr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln6oktiqr"/>`,
		"fallback": "bi:mouse3",
	});
}

export default Component;
