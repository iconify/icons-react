import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geode8baf.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="geode8baf"/>`,
		"fallback": "vaadin:sword",
	});
}

export default Component;
