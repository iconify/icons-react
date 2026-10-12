import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xeh2-4bai.css';
import '../../css/s/s8q5ribee.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xeh2-4bai"/><path class="s8q5ribee"/>`,
		"fallback": "energy-icons:stapler-48",
	});
}

export default Component;
