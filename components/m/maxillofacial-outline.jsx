import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xv4ofb8wd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xv4ofb8wd"/>`,
		"fallback": "healthicons:maxillofacial-outline",
	});
}

export default Component;
