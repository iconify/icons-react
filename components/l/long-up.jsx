import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qha6nrb4l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qha6nrb4l"/>`,
		"fallback": "ci:long-up",
	});
}

export default Component;
