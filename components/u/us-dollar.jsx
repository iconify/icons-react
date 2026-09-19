import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dtr9qyb2j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dtr9qyb2j"/>`,
		"fallback": "icons8:us-dollar",
	});
}

export default Component;
