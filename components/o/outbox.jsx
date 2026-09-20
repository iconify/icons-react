import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/intqmzodw.css';
import '../../css/j/jbvtufb0o.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="intqmzodw"/><path class="jbvtufb0o"/>`,
		"fallback": "vaadin:outbox",
	});
}

export default Component;
