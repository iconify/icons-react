import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fml3q_bdj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fml3q_bdj"/>`,
		"fallback": "ix:threads-logo",
	});
}

export default Component;
