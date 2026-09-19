import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pahmzabtx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pahmzabtx"/>`,
		"fallback": "icon-park-outline:plus-cross",
	});
}

export default Component;
