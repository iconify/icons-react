import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-rgy4hxp.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s-rgy4hxp"/>`,
		"fallback": "icon-park-solid:point-out",
	});
}

export default Component;
