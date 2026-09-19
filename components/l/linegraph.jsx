import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9wfist3o.css';

const viewBox = {"width":42,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s9wfist3o"/>`,
		"fallback": "et:linegraph",
	});
}

export default Component;
