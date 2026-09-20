import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwu1xfb5t.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwu1xfb5t"/>`,
		"fallback": "vaadin:split-h",
	});
}

export default Component;
