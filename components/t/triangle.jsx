import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ab5hjefrf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ab5hjefrf"/>`,
		"fallback": "icon-park:triangle",
	});
}

export default Component;
