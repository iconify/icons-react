import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/glgjn_3wv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="glgjn_3wv"/>`,
		"fallback": "icon-park-outline:right-branch-two",
	});
}

export default Component;
