import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko5dwac9v.css';
import '../../css/q/q_5fvp18n.css';
import '../../css/q/qua1n-5tb.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko5dwac9v"/><path class="q_5fvp18n"/><path class="qua1n-5tb"/>`,
		"fallback": "devicon:vlang",
	});
}

export default Component;
