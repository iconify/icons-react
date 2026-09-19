import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xwtz1c_6i.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xwtz1c_6i"/>`,
		"fallback": "healthicons:ppe-gown2x-outline",
	});
}

export default Component;
