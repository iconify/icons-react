import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rokfmhb3e.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rokfmhb3e"/>`,
		"fallback": "ant-design:linkedin-outline",
	});
}

export default Component;
