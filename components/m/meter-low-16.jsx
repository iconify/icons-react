import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xrbv2j1ga.css';
import '../../css/q/qtl0jcblb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xrbv2j1ga"/><path class="qtl0jcblb"/>`,
		"fallback": "qlementine-icons:meter-low-16",
	});
}

export default Component;
