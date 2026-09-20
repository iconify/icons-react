import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad656ublh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ad656ublh"/>`,
		"fallback": "streamline-plump:reduced-inequalities-solid",
	});
}

export default Component;
