import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w337psblt.css';
import '../../css/u/u6ht0eb5g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w337psblt"/><path class="u6ht0eb5g"/>`,
		"fallback": "vaadin:microphone",
	});
}

export default Component;
