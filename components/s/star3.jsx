import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c21ih15aa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c21ih15aa"/>`,
		"fallback": "reicon:star3",
	});
}

export default Component;
