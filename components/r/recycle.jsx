import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wnejb0o4g.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wnejb0o4g"/>`,
		"fallback": "vaadin:recycle",
	});
}

export default Component;
