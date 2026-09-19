import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a54rpy29c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a54rpy29c"/>`,
		"fallback": "healthicons:prescription-document",
	});
}

export default Component;
