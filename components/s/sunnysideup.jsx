import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tjf9qhbvu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tjf9qhbvu"/>`,
		"fallback": "whh:sunnysideup",
	});
}

export default Component;
