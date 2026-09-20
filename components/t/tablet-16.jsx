import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q5lan_0sa.css';
import '../../css/s/sep8gme6u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q5lan_0sa"/><path clip-rule="evenodd" class="sep8gme6u"/>`,
		"fallback": "qlementine-icons:tablet-16",
	});
}

export default Component;
