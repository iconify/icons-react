import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0z3i-1xz.css';
import '../../css/k/kj2p-acws.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0z3i-1xz"/><path class="kj2p-acws"/>`,
		"fallback": "tdesign:questionnaire-double-filled",
	});
}

export default Component;
