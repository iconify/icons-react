import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs80a_qke.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs80a_qke"/>`,
		"fallback": "reicon:search-normal2",
	});
}

export default Component;
