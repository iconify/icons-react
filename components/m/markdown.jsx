import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tpp8vfq_c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tpp8vfq_c"/>`,
		"fallback": "thesvg:markdown",
	});
}

export default Component;
