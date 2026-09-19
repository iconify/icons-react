import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z21-q0eyx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z21-q0eyx"/>`,
		"fallback": "icon-park-outline:micro-sd",
	});
}

export default Component;
