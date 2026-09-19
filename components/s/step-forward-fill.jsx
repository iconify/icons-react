import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh_fhblyw.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fh_fhblyw"/>`,
		"fallback": "ant-design:step-forward-fill",
	});
}

export default Component;
