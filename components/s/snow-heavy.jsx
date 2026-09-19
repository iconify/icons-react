import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/youi4hq0s.css';
import '../../css/d/d_h7705bc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="youi4hq0s"/><path class="d_h7705bc"/>`,
		"fallback": "carbon:snow-heavy",
	});
}

export default Component;
