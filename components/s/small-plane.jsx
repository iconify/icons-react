import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko-_e_tll.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko-_e_tll"/>`,
		"fallback": "healthicons:small-plane",
	});
}

export default Component;
