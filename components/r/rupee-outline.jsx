import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tdf057bks.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tdf057bks"/>`,
		"fallback": "healthicons:rupee-outline",
	});
}

export default Component;
