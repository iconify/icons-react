import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp1806bns.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp1806bns"/>`,
		"fallback": "streamline-plump:tablet-capsule",
	});
}

export default Component;
