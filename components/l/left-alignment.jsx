import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m9pw6ooui.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m9pw6ooui"/>`,
		"fallback": "icon-park-outline:left-alignment",
	});
}

export default Component;
