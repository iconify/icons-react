import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sb9vr8bjk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sb9vr8bjk"/>`,
		"fallback": "icon-park-outline:left-small-down",
	});
}

export default Component;
