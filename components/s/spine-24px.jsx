import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo0pk69oh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo0pk69oh"/>`,
		"fallback": "healthicons:spine-24px",
	});
}

export default Component;
