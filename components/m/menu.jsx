import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qj_287btv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qj_287btv"/>`,
		"fallback": "doodle-icons:menu",
	});
}

export default Component;
