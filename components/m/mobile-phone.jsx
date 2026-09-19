import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q55j-hbxi.css';

const viewBox = {"width":768,"height":1280};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q55j-hbxi"/>`,
		"fallback": "fa:mobile-phone",
	});
}

export default Component;
