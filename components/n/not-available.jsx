import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cwox1tbpd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cwox1tbpd"/>`,
		"fallback": "carbon:not-available",
	});
}

export default Component;
