import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hfqrcib1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hfqrcib1p"/>`,
		"fallback": "octicon:minimize-24",
	});
}

export default Component;
