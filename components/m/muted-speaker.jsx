import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvd6fwb9u.css';
import '../../css/c/cy0gm1byi.css';
import '../../css/n/n0t-e50so.css';
import '../../css/b/bjw8llbbv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dvd6fwb9u"><path class="cy0gm1byi"/><path class="n0t-e50so"/></g><path class="bjw8llbbv"/>`,
		"fallback": "openmoji:muted-speaker",
	});
}

export default Component;
