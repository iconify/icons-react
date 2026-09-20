import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6_537x8t.css';
import '../../css/v/vd_9zuben.css';
import '../../css/s/ss70euapj.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6_537x8t"/><path class="vd_9zuben"/><path class="ss70euapj"/>`,
		"fallback": "vaadin:question-circle-o",
	});
}

export default Component;
