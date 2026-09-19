import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ixb90tb4e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ixb90tb4e"/>`,
		"fallback": "healthicons:w",
	});
}

export default Component;
