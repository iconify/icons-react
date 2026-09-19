import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t64z20bcg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t64z20bcg"/>`,
		"fallback": "healthicons:q2x-outline",
	});
}

export default Component;
