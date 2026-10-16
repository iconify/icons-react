import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayrqo3blg.css';
import '../../css/g/gb1sjyb5o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayrqo3blg"/><path class="gb1sjyb5o"/>`,
		"fallback": "energy-icons:letter-case-48",
	});
}

export default Component;
