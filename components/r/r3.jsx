import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v46z5iboj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v46z5iboj"/>`,
		"fallback": "simple-icons:r3",
	});
}

export default Component;
