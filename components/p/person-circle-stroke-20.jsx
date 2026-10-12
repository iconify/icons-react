import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngyvkq8lm.css';
import '../../css/b/b5it182ov.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngyvkq8lm"/><path class="b5it182ov"/>`,
		"fallback": "garden:person-circle-stroke-20",
	});
}

export default Component;
