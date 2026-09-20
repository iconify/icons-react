import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xo9bvn1yl.css';
import '../../css/q/qab9gx76z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="xo9bvn1yl"/><path class="qab9gx76z"/></g>`,
		"fallback": "meteor-icons:search",
	});
}

export default Component;
