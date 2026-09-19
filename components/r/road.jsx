import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgh_1byzg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qgh_1byzg"/>`,
		"fallback": "icon-park-outline:road",
	});
}

export default Component;
