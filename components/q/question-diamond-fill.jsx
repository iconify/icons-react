import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s3d5r3obd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s3d5r3obd"/>`,
		"fallback": "bi:question-diamond-fill",
	});
}

export default Component;
