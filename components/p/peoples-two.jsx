import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bwsj9qblz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bwsj9qblz"/>`,
		"fallback": "icon-park-outline:peoples-two",
	});
}

export default Component;
