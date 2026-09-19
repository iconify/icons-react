import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/burs33b6m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="burs33b6m"/>`,
		"fallback": "icon-park-solid:two-semicircles",
	});
}

export default Component;
