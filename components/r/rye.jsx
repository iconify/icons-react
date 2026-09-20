import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/or0_-7bdm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="or0_-7bdm"/>`,
		"fallback": "thesvg:rye",
	});
}

export default Component;
