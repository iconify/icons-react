import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuy9-04as.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuy9-04as"/>`,
		"fallback": "icomoon-free:telegram",
	});
}

export default Component;
