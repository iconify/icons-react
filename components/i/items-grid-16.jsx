import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqnnw7y_c.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="zqnnw7y_c"/>`,
		"fallback": "qlementine-icons:items-grid-16",
	});
}

export default Component;
