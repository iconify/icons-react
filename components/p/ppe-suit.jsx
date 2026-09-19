import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fk_9v_7sz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fk_9v_7sz"/>`,
		"fallback": "healthicons:ppe-suit",
	});
}

export default Component;
