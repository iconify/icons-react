import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eorq5i2_o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eorq5i2_o"/>`,
		"fallback": "noviair:sushi-heart",
	});
}

export default Component;
