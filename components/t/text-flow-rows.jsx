import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/r/r5k3t84wp.css';
import '../../css/e/edj943bew.css';
import '../../css/w/wrzpervsv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="r5k3t84wp"/><path class="edj943bew"/><path class="wrzpervsv"/></g>`,
		"fallback": "streamline-sharp-color:text-flow-rows",
	});
}

export default Component;
