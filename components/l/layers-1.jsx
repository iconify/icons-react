import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/ywr-50bpu.css';
import '../../css/i/iwxmc_bdi.css';
import '../../css/a/akxil9ngu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="ywr-50bpu"/><path class="iwxmc_bdi"/><path class="akxil9ngu"/></g>`,
		"fallback": "streamline-sharp:layers-1",
	});
}

export default Component;
