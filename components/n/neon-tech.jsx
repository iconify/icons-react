import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/ba4wh6eoj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ba4wh6eoj"/>`,
		"fallback": "bxl:neon-tech",
	});
}

export default Component;
