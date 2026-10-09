import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdh90fr2n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tdh90fr2n"/>`,
		"fallback": "energy-icons:sparkles-48-bold",
	});
}

export default Component;
