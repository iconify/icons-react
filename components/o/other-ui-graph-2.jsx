import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-lwfi6-w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q-lwfi6-w"/>`,
		"fallback": "streamline-block:other-ui-graph-2",
	});
}

export default Component;
