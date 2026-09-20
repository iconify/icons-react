import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tec5ddc1g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tec5ddc1g"/>`,
		"fallback": "si:sign-out-duotone",
	});
}

export default Component;
