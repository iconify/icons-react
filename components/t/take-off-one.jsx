import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qlm0orbvo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qlm0orbvo"/>`,
		"fallback": "icon-park-outline:take-off-one",
	});
}

export default Component;
