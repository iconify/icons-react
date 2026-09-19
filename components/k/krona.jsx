import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d47xi2b9o.css';
import '../../css/f/fjryjwbdx.css';
import '../../css/n/nydaq4aap.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d47xi2b9o"/><path class="fjryjwbdx"/><path class="nydaq4aap"/>`,
		"fallback": "formkit:krona",
	});
}

export default Component;
