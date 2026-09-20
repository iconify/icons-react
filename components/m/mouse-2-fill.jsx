import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/td859mbpm.css';
import '../../css/p/pmiyxhb-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="td859mbpm"/><path class="pmiyxhb-g"/>`,
		"fallback": "mage:mouse-2-fill",
	});
}

export default Component;
