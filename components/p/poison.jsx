import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nj2h62b3c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="nj2h62b3c"/>`,
		"fallback": "healthicons:poison",
	});
}

export default Component;
