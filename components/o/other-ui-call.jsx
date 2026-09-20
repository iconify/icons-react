import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q9frxobaa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q9frxobaa"/>`,
		"fallback": "streamline-block:other-ui-call",
	});
}

export default Component;
