import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m5s5r9buo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m5s5r9buo"/>`,
		"fallback": "icon-park-solid:quadrilateral",
	});
}

export default Component;
