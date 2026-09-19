import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3_xvs-ad.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v3_xvs-ad"/>`,
		"fallback": "cryptocurrency:ppp",
	});
}

export default Component;
