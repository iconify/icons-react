import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t-umgvbov.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t-umgvbov"/>`,
		"fallback": "fluent-mdl2:video-light-off",
	});
}

export default Component;
