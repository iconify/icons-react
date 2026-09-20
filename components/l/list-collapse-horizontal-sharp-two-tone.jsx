import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t361nh1vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t361nh1vl"/>`,
		"fallback": "keyline-icons:list-collapse-horizontal-sharp-two-tone",
	});
}

export default Component;
