import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iri9dpb6v.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iri9dpb6v"/>`,
		"fallback": "raphael:stopwatch",
	});
}

export default Component;
