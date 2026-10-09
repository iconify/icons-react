import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmuenm5kt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmuenm5kt"/>`,
		"fallback": "energy-icons:shield-off-48-bold",
	});
}

export default Component;
