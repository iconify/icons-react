import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ued_4ab3a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ued_4ab3a"/>`,
		"fallback": "simple-icons:openzeppelin",
	});
}

export default Component;
