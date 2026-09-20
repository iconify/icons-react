import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k0syi2bkw.css';
import '../../css/n/n4g77lbcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k0syi2bkw"/><path class="n4g77lbcq"/></g>`,
		"fallback": "mage:television-check",
	});
}

export default Component;
