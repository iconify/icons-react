import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/n-u27jbzo.css';
import '../../css/y/yhmwoibxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="n-u27jbzo"/><path class="yhmwoibxd"/></g>`,
		"fallback": "matita:planet",
	});
}

export default Component;
