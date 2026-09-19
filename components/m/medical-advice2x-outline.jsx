import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x8bdmsb3n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="x8bdmsb3n"/>`,
		"fallback": "healthicons:medical-advice2x-outline",
	});
}

export default Component;
