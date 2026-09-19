import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt62d_b9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt62d_b9a"/>`,
		"fallback": "hugeicons:jar",
	});
}

export default Component;
