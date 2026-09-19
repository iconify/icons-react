import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xf-9gnbnd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xf-9gnbnd"/>`,
		"fallback": "healthicons:transgender",
	});
}

export default Component;
