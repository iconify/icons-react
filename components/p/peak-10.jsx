import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vi0bogb6e.css';

const viewBox = {"width":10,"height":10};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vi0bogb6e"/>`,
		"fallback": "osmic:peak-10",
	});
}

export default Component;
