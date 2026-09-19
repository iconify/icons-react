import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jkmbsbbqu.css';
import '../../css/k/kb1ytkvcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jkmbsbbqu"/><path class="kb1ytkvcz"/>`,
		"fallback": "flat-color-icons:vip",
	});
}

export default Component;
