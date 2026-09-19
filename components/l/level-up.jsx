import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t3ct_9bhw.css';

const viewBox = {"width":1056,"height":1408};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t3ct_9bhw"/>`,
		"fallback": "fa:level-up",
	});
}

export default Component;
