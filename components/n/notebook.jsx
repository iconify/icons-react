import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1d2zac5p.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1d2zac5p"/>`,
		"fallback": "codicon:notebook",
	});
}

export default Component;
