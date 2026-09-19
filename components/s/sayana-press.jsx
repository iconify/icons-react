import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/et7sllbbn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="et7sllbbn"/>`,
		"fallback": "healthicons:sayana-press",
	});
}

export default Component;
