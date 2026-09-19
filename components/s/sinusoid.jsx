import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0n990bmj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0n990bmj"/>`,
		"fallback": "icon-park-outline:sinusoid",
	});
}

export default Component;
