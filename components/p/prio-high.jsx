import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ak3isib6f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ak3isib6f"/>`,
		"fallback": "ix:prio-high",
	});
}

export default Component;
