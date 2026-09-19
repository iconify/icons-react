import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lkblh9o1l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lkblh9o1l"/>`,
		"fallback": "cib:nuget",
	});
}

export default Component;
