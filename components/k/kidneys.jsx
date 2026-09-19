import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzn_9vblm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dzn_9vblm"/>`,
		"fallback": "healthicons:kidneys",
	});
}

export default Component;
