import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xikrf4s6w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xikrf4s6w"/>`,
		"fallback": "healthicons:truck-driver",
	});
}

export default Component;
