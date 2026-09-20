import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl26hdf4q.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl26hdf4q"/>`,
		"fallback": "maki:rail",
	});
}

export default Component;
