import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddna9niwb.css';
import '../../css/g/g2r0sac-v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ddna9niwb"/><path class="g2r0sac-v"/>`,
		"fallback": "energy-icons:palette-48",
	});
}

export default Component;
