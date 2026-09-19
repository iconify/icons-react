import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae0qi1bpc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae0qi1bpc"/>`,
		"fallback": "healthicons:r-outline",
	});
}

export default Component;
