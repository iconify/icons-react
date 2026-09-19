import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz9ax0bzd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz9ax0bzd"/>`,
		"fallback": "codicon:milestone",
	});
}

export default Component;
