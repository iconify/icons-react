import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j96q__hzb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j96q__hzb"/>`,
		"fallback": "icon-park-outline:slippers-one",
	});
}

export default Component;
