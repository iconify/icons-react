import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nil9-lhla.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nil9-lhla"/>`,
		"fallback": "vaadin:spinner-arc",
	});
}

export default Component;
