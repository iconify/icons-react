import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oflhhkbur.css';
import '../../css/r/rql-eabty.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oflhhkbur"/><path class="rql-eabty"/>`,
		"fallback": "vaadin:mute",
	});
}

export default Component;
