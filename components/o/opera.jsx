import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5eussbda.css';
import '../../css/e/e6n3rcb6j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q5eussbda"/><path class="e6n3rcb6j"/>`,
		"fallback": "icomoon-free:opera",
	});
}

export default Component;
