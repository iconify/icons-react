import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aosqt_h4v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aosqt_h4v"/>`,
		"fallback": "icon-park-solid:vertical-tidy-up",
	});
}

export default Component;
