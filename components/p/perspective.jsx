import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dirhopb0w.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dirhopb0w"/>`,
		"fallback": "icon-park-outline:perspective",
	});
}

export default Component;
