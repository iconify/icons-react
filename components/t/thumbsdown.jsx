import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhff0_btd.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhff0_btd"/>`,
		"fallback": "codicon:thumbsdown",
	});
}

export default Component;
