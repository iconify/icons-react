import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q2ibnsbfx.css';
import '../../css/k/kb4_7ccic.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q2ibnsbfx"/><path class="kb4_7ccic"/>`,
		"fallback": "devicon:swagger",
	});
}

export default Component;
