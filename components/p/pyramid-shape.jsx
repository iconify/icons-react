import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjuz_-ocm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjuz_-ocm"/>`,
		"fallback": "streamline-plump:pyramid-shape",
	});
}

export default Component;
