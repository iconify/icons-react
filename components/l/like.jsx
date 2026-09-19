import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gx9_onrig.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gx9_onrig"/>`,
		"fallback": "icon-park-solid:like",
	});
}

export default Component;
