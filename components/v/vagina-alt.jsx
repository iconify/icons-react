import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uord8ebkm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="uord8ebkm"/>`,
		"fallback": "healthicons:vagina-alt",
	});
}

export default Component;
