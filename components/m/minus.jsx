import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d13k8pb4u.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d13k8pb4u"/>`,
		"fallback": "icon-park:minus",
	});
}

export default Component;
