import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m72l4abnf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="m72l4abnf"/>`,
		"fallback": "healthicons:v",
	});
}

export default Component;
