import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbc8lbcof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbc8lbcof"/>`,
		"fallback": "octicon:north-star-24",
	});
}

export default Component;
