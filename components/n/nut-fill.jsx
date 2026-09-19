import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ir9eex94f.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ir9eex94f"/>`,
		"fallback": "bi:nut-fill",
	});
}

export default Component;
